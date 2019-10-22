<template>
 <div id="header">
        <h1 class="saltcount">Times Counted Salty: {{saltCountDB[0].salt}}</h1>
    <img class="reactionpic" v-bind:src="ficpic">
    <h1 class=title>{{ title }}</h1>
    <div class="buttons">
        <button class="button1" v-on:click="yesClick()">YES</button>
        <button class="button2" v-on:click="noClick()">NO</button>
    </div>
    </div>
</template>

<script>
import { saltDb } from '../fb';
import ficsalt from "../assets/ficmove.gif"
import poorfic from "../assets/arrestedfic.jpg"
import happyfic from "../assets/happyfic.jpg"
    
export default{
    name: 'Counter',
    data (){
        return{
        title: 'Is Fic Salty?',
        saltCountDB: [],
        ficpic: ficsalt,
        }
    },
    firestore: {
        saltCountDB: saltDb.collection('saltcount'),
    },
    methods: {
        yesClick: function() {
            let saltVar = this.saltCountDB[0].salt;
            let saltObj = this.saltCountDB[0];
            saltVar = saltVar + 1;
            saltObj.salt = saltVar;
            saltDb.collection('saltcount').doc("SvWheEd5l8ad9jQc8D8g").set(saltObj)
            this.ficpic = poorfic;
            this.title = 'Poor fic :(';
        },
        noClick: function() {   
            this.ficpic = happyfic;
            this.title = 'This is rare :O';
        }
        
    }
}
</script>