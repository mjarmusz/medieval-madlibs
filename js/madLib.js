/*
    madLib.js
    
    See the notes - madLib-notes.txt
*/

function madLib(inputs) {

    /* 1. get each input */
    var adjectiveOne;
    adjectiveOne = inputs.adjective1.value;
    console.log("input1: " + adjectiveOne);

    var adverbOne;
    adverbOne = inputs.adverb1.value;
    console.log("input2: " + adverbOne);

    var adjectiveTwo;
    adjectiveTwo = inputs.adjective2.value;
    console.log("input3: " + adjectiveTwo);

    var nounOne;
    nounOne = inputs.noun1.value;
    console.log("input4: " + nounOne);

    var nounTwo;
    nounTwo = inputs.noun2.value;
    console.log("input5: " + nounTwo);

    var nounThree;
    nounThree = inputs.noun3.value;
    console.log("input6: " + nounThree);

    var adjectiveThree;
    adjectiveThree = inputs.adjective3.value;
    console.log("input7: " + adjectiveThree);

    var adjectiveFour;
    adjectiveFour = inputs.adjective4.value;
    console.log("input8: " + adjectiveFour);

    var bodypartOne;
    bodypartOne = inputs.bodypart1.value;
    console.log("input9: " + bodypartOne);

    var adjectiveFive;
    adjectiveFive = inputs.adjective5.value;
    console.log("input10: " + adjectiveFive);

    var verbOne;
    verbOne = inputs.verb1.value;
    console.log("input11: " + verbOne);

    var verbTwo;
    verbTwo = inputs.verb2.value;
    console.log("input12: " + verbTwo);

    var bodypartTwo;
    bodypartTwo = inputs.bodypart2.value;
    console.log("input13: " + bodypartTwo);

    var verbingOne;
    verbingOne = inputs.verbing1.value;
    console.log("input14: " + verbingOne);

    var nounFour;
    nounFour = inputs.noun4.value;
    console.log("input15: " + nounFour);

    var verbThree;
    verbThree = inputs.verb3.value;
    console.log("input16: " + verbThree);






    var bodypartThree;
    bodypartThree = inputs.bodypart3.value;
    console.log("input17: " + bodypartThree);

    var adjectiveSix;
    adjectiveSix = inputs.adjective6.value;
    console.log("input18: " + adjectiveSix);

    var adjectiveSeven;
    adjectiveSeven = inputs.adjective7.value;
    console.log("input19: " + adjectiveSeven);

    var nounFive;
    nounFive = inputs.noun5.value;
    console.log("input20: " + nounFive);

    var adverbTwo;
    adverbTwo = inputs.adverb2.value;
    console.log("input21: " + adverbTwo);

    var shape;
    shape = inputs.shape.value;
    console.log("input21: " + shape);





    /* 2. build the mad lib */
    var madLib;

    madLib = "<h2> <span class='outputTitle maroon'> Listen all " +
        adjectiveTwo +
        " knights... </h2>" +
        "<span class='output'><br>Due to the attack on our castle by a " +

        adverbOne +
        " " +
        nounOne +
        ".  We are seeking a " +
        adjectiveTwo +
        " knight to capture the " +
        nounOne +
        " and hold it accountable for its crimes. Weapons will be provided to the chosen knight such as a " +
        nounTwo +
        ", " +
        nounThree +
        ", and " +
        nounFour +
        " to aid in the quest.  Knights must not only be " +
        adjectiveTwo + " but also " +
        adjectiveThree +
        " to be considered for the quest.  Beware of the " +
        nounOne +
        "’s " +
        bodypartOne +
        ", for it is quite " +
        adjectiveFour +
        ".  The secret to capturing the " +
        nounOne +
        " is to " +
        verbOne +
        " straight at it, then " +
        verbTwo +
        " up its " +
        bodypartTwo +
        " to prevent it from " +
        verbingOne +
        ". While some think lobbing a " +
        nounFive +
        " at the " +
        nounOne +
        " will kill it, this will only make it run " +
        adverbTwo +
        " in a " +
        shape +
        ".  If our knight succeeds in capturing the " +
        nounOne +
        ", its " +
        bodypartTwo +
        " will be served to the king since " +
        nounOne +
        "'s " +
        bodypartTwo +
        " is his favorite meal after " +
        adjectiveSix +
        " " +
        adjectiveOne +
        " " +
        bodypartOne +

        ". <br><br><span class='goodLuck'> May fortune aid you on your " +
        adjectiveSeven +
        " quest! </span></span></span>" +
        "<br>";
    console.log(madLib);

    /* 3. write the madlib to the document */
    document.getElementById("responseArea").innerHTML = madLib;

} //doIt()
