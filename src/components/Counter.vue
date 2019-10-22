<template>
 <div id="header">
        <h1 class="saltcount">Salt Count: {{saltiness}}</h1>
    <img class="reactionpic" v-bind:src="ficpic">
    <h1 class=title>{{ title }}</h1>
    <div class="buttons">
        <button class="button1" v-on:click="yesClick()">YES</button>
        <button class="button2" v-on:click="noClick()">NO</button>
    </div>
    </div>
</template>

<script>
import { db } from '../main'
import ficsalt from "../assets/isficsalty.jpg"
import poorfic from "../assets/arrestedfic.jpg"
import happyfic from "../assets/happyfic.jpg"
    
export default{
    name: 'Counter',
    data (){
        return{
        title: 'Is Fic Salty?',
        saltiness: 0,
        ficpic: ficsalt,
        yesClick: function() {
            this.saltiness = this.saltiness + 1;
            this.ficpic = poorfic;
            this.title = 'Poor fic :(';
        },
        noClick: function() {   
            this.ficpic = happyfic;
            this.title = 'This is rare :O';
        }
        }
    },
    firestore () {
    return {
      saltcount: db.collection('saltcount')
    }
}
}
</script>