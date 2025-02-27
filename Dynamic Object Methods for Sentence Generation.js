let sentenceBuilder = {
    subject : "I" ,
    verb : "am",
    object : "coding" ,
    buildSentence : function genrateSentence(){
      return (this.subject && this.verb && this.object) ? `${this.subject} ${this.verb} ${this.object}` : "Incomplete sentence"
    } ,
    updateProperty : function update(property , value){
      return this.hasOwnProperty(property) ? (this[property] = value , "") : "Invalid property"
    }
  }
  console.log(sentenceBuilder.buildSentence());
  console.log(sentenceBuilder.updateProperty("verb" , " am learning"));
  console.log(sentenceBuilder.buildSentence());
  console.log(sentenceBuilder.updateProperty("subject" , "The cat"));
  console.log(sentenceBuilder.buildSentence());
  console.log(sentenceBuilder.updateProperty("mood" , "happy"));
  console.log(sentenceBuilder.updateProperty("verb" , ""));
   console.log(sentenceBuilder.buildSentence());
