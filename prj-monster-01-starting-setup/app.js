const getRandomValue = (max, min) =>{
    return Math.floor((Math.random() * (max-min))) + min
}


const app = Vue.createApp({
    data(){
        return{
            playerHealth:100,
            monsterHealth:100,
            currentRound:0,
            surrendered:false,
            logs:[]
        }
    },
    computed:{
        monsterBarWidth(){
            if(this.monsterHealth < 0){
                return {
                    width: "0%"
                }
            }
            return {
                width: `${this.monsterHealth}%`
            }
        },
        playerBarWidth(){
            if(this.playerHealth < 0){
                return {
                    width: "0%"
                }
            }
            return {
                width: `${this.playerHealth}%`
            }
        },
        canUseSpecialAttack(){
            return this.currentRound % 3 !== 0
        },
        gameOver(){
            if(this.playerHealth <= 0 && this.monsterHealth <= 0){
                return 'draw'
            } 
            else if(this.playerHealth <= 0 || this.surrendered){
                return 'monster wins'
            } 
            else if(this.monsterHealth <= 0){
                return 'player wins'
            } 
        }
    },
    methods:{
        attackMonster(){
            const damage = getRandomValue(12,5)
            this.monsterHealth-=damage
            this.addLogMessage('player', 'attacked monster', damage)
            this.attackPlayer()
            this.currentRound+=1
        },
        attackPlayer(){
            const damage = getRandomValue(15,8)
            this.playerHealth-=damage
            this.addLogMessage('monster', 'attacked player', damage)
        },
        SpecialAttackMonster(){
            const damage = getRandomValue(25,10)
            this.monsterHealth-=damage
            this.attackPlayer()
            this.currentRound+=1
        },
        healPlayer(){
            const heal = getRandomValue(20,8)
            if(this.playerHealth + heal > 100) this.playerHealth = 100
            else this.playerHealth += heal
            this.addLogMessage('player', 'healed', heal)
            this.currentRound+=1
            this.attackPlayer()
        },
        resetGame(){
            this.playerHealth = 100
            this.monsterHealth = 100
            this.currentRound = 0
            this.surrendered = false
            this.logs = []
        },
        surrender(){
            this.surrendered = true
        },
        addLogMessage(who, what, value){
            this.logs.push({
                actionBy:who,
                actionType:what,
                actionValue:value
            })
        }
    }
})

app.mount("#game")