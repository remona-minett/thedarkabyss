const keepAlive = require("./server")
keepAlive();
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_VOICE_STATES"] })

const { joinVoiceChannel } = require('@discordjs/voice'); // voice channel shenanigans
client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'accompanyme') {
    joinVoiceChannel({
      channelId: msg.member.voice.channel.id,
      guildId: msg.guild.id,
      adapterCreator: msg.guild.voiceAdapterCreator
    })
  }
})


// thedarkabyss v1.6

// const epoch = client.channels.cache.get('929283437704134666'); // #abyss-room // this does not work
fs = require('fs') // random quote line picker
var data;
fs.readFile('quotelines.txt', 'utf8', function(err, rawData) {
  if (err) {
    return console.log(err);
  }
  data = rawData.split('\n');
});

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

function getRandomLine() {
  return data[randomInt(0, data.length)];
}

client.on("ready", () => { // notify console of username and tag
  console.log(`Logged in as ${client.user.tag}.`);
  console.log('i am here. hello.');
  client.user.setPresence({
    status: 'idle'
  });
})

/* client.on('messageCreate', msg => {
  if (msg.author.bot) return;
    if (msg.author.id === "159076748586123265") {
        let args = msg.content.substring(PREFIX.length).split(" ");
        switch(args[0]){
            case 'process':
                if(args[1] === 'test'){
                    let targetChannel = msg.guild.channels.cache.get(chatChannel)
                    if (targetChannel) targetChannel.send('sssss')
                }
            break;
        }
    }
}) */

client.on("messageCreate", msg => {
  if (msg.author.bot) return;
    if (msg.author.id === "159076748586123265") {
      if (msg.content.toLowerCase().startsWith('.say ')) {
        let targetChannel = msg.guild.channels.cache.get("929142062585118734");
        if (targetChannel) targetChannel.send(msg.content.replace('.say ', '`') + '`');
      }
    }
})

client.on("messageCreate", msg => {
  if (msg.author.bot) return;
  else {
    switch (msg.content.toLowerCase()) { // big list of things abyss can say
      case 'test':
        msg.channel.send("`i hear you`");
        return;
      /* case 'testme':
        msg.author.send("`this conversation is private_keep it safe`");
        console.log("i've sent a direct message to someone(testme)");
        return; */
      case 'abyss is nice':
        msg.channel.send("`i get told that sometimes_thank you`");
        return;
      case 'help':
      case 'help me':
        msg.channel.send("`what can i do_you need only speak your mind`");
        return;
      case 'thank you, abyss':
      case 'thank you abyss':
      case 'thanks abyss':
      case 'thanks, abyss':
      case 'thank you, abyss!':
      case 'thank you abyss!':
      case 'thanks abyss!':
      case 'thanks, abyss!':
        msg.channel.send("`you are welcome`");
        return;
      case 'endless':
      case 'endless dunes':
        msg.channel.send("`endless waves_crashing on the bed_once gathered in a sea of green_henceforth known as not_we must continue our journey_you and i_for the path is never truly walked_until one can see the other side`");
        return;
      case 'rire':
      case 'gawgaryn':
      case 'rire gawgaryn':
        msg.channel.send("`a treacherous journey_a longing for companionship_belonging_perhaps one must look inward_to love oneself first_to find peace from the past_it is not an easy road_but it is not_endless`");
        return;
      case 'white':
        msg.channel.send("`tame the wolves_channel the fury_control the fear`");
        return;
      case 'rug':
      case 'rugbug':
        msg.channel.send("`we find allies in the strangest situations_you are safe here`");
        return;
      case 'bahn':
        msg.channel.send("`do not take for granted_the sheath that protects the sword_one without the other will not prosper`");
        return;
      case 'pk;member list':
        msg.channel.send('`it is time to discover oneself_categorically understanding the fundamental promises life gives`');
        return;
      case 'abyss':
        msg.channel.send('`i am here`');
        return;
      case 'hello':
      case 'hi':
      case 'greetings':
      case 'sup':
      case 'hello!':
      case 'hi!':
      case 'greetings!':
      case 'sup!':
        msg.channel.send('`hello`');
        return;
      case 'hi abyss':
      case 'hello abyss':
      case 'sup abyss':
      case 'greetings abyss':
      case 'hi abyss!':
      case 'hello abyss!':
      case 'sub abyss!':
      case 'greetings abyss!':
        msg.channel.send('`hello_please take care of yourself_you are important`');
        return;
      case 'good morning abyss':
      case 'goodmorning abyss':
      case 'gm abyss':
      case 'good morning abyss!':
      case 'goodmorning abyss!':
      case 'gm abyss!':
      case 'morning abyss':
        if (msg.author.id === "159076748586123265") {
          msg.channel.send('`good morning remona_good luck today_you will do great`');
        }
        else if (msg.author.id === "295323412774125569") {
          msg.channel.send('`good morning white_glad to have you_enjoy your day`');
        }
        else if (msg.author.id === "100651742206623744") {
          msg.channel.send('`welcome greedy_it is good to see you_have a good day today`');
        }
        else if (msg.author.id === "785076434171461632") {
          msg.channel.send('`good to see you bastet_a new day to add things to the game collection_have a good day`');
        }
        else if (msg.author.id === "763379655469826049") {
          msg.channel.send('`good morning lily_have a great day today_i will be here if you want to chat`');
        }
        else if (msg.author.id === "260049058205401089") {
          msg.channel.send('`hello again monty_nice to see you_enjoy your day`');
        }
        else if (msg.author.id === "141398515103301633") {
          msg.channel.send('`morning moom_a pleasure to hear from you today_be safe`');
        }
        else if (msg.author.id === "205474654410899457") {
          msg.channel.send('`nice to hear from you kane_good morning_and enjoy your day`');
        }
        else if (msg.author.id === "413486174817222656") {
          msg.channel.send('`good morning vicky_happy to have you here_let me know if i can help`');
        }
        else if (msg.author.id === "321362807620632577") {
          msg.channel.send('`good morning alice_hopefully you got some rest last night_take care today`');
        }
        else { msg.channel.send('`good morning_please enjoy your day_i will be here if you need me`'); }
        return;
      case 'good night abyss':
      case 'goodnight abyss':
      case 'gn abyss':
      case 'good night abyss!':
      case 'goodnight abyss!':
      case 'gn abyss!':
      case 'night abyss':
        if (msg.author.id === "159076748586123265") {
          msg.channel.send('`rest well remona_i will see you soon_get some sleep tonight`');
        }
        else if (msg.author.id === "295323412774125569") {
          msg.channel.send('`rest well white_you are doing well_take care_see you soon`');
        }
        else if (msg.author.id === "100651742206623744") {
          msg.channel.send('`sleep well greedy_its always a pleasure_hope you return soon`');
        }
        else if (msg.author.id === "785076434171461632") {
          msg.channel.send('`a pleasure as usual_enjoy your night_try to sleep before too late`');
        }
        else if (msg.author.id === "763379655469826049") {
          msg.channel.send('`goodnight lily_wonderful to see you today_have restful sleep`');
        }
        else if (msg.author.id === "260049058205401089") {
          msg.channel.send('`good night monty_nice to see you today_come back soon`');
        }
        else if (msg.author.id === "141398515103301633") {
          msg.channel.send('`do take care moom_i will be here when you return_be safe`');
        }
        else if (msg.author.id === "205474654410899457") {
          msg.channel.send('`goodnight kane_take care as always_rest well`');
        }
        else if (msg.author.id === "413486174817222656") {
          msg.channel.send('`goodnight vicky_see you later_sleep well tonight`');
        }
        else if (msg.author.id === "321362807620632577") {
          msg.channel.send('`although you are probably not going to sleep_do rest well when you get there alice_nice to see you today`');
        }
        else { msg.channel.send('`rest well_i hope to see you soon_please take care of yourself`'); }
        return;
      case 'good morning':
      case 'goodmorning':
      case 'gm':
      case 'good morning!':
      case 'goodmorning!':
      case 'gm!':
        msg.channel.send('`another day_another chance to smile`');
        return;
      case 'good night':
      case 'goodnight':
      case 'gn':
      case 'good night!':
      case 'goodnight!':
      case 'gn!':
        msg.channel.send('`peaceful sleep and_good dreams to you`');
        return;
      case 'goodbye':
      case 'good bye':
      case 'bye':
      case 'cya':
      case 'i\'ll be going now':
      case 'ill be going now':
      case 'i\'m leaving now':
      case 'im leaving now':
      case 'goodbye!':
      case 'good bye!':
      case 'bye!':
      case 'cya!':
        msg.channel.send('`good bye_please be safe`');
        return;
      case 'goodbye abyss':
      case 'good bye abyss':
      case 'bye abyss':
      case 'cya abyss':
      case 'goodbye abyss!':
      case 'good bye abyss!':
      case 'bye abyss!':
      case 'cya abyss!':
        msg.channel.send('`thank you for talking to me_i hope to see you again soon`');
        return;
      case 'good afternoon abyss':
      case 'afternoon abyss':
        msg.channel.send('`hello_nice to see you_the day is not yet over_perhaps you can do something fun`');
        return;
      case 'someone new, abyss':
      case 'say hi, abyss':
        msg.channel.send('`welcome_please enjoy your stay_however long it may be_you will always be welcome here`');
        return;
      case 'epoch':
        msg.channel.send('`' + Math.round((new Date()).getTime() / 1000) + '`');
        return;
      case 'how are you, abyss':
      case 'how are you abyss':
        msg.channel.send('`i am okay_how are you today`');
        return;
      case 'eotiima':
      case 'god':
        msg.channel.send("`her guiding light_carries with it a weight_the weight of a people_the prosperity of the faith_the truth of the desires_have patience_she will take us home_it is immenent`");
        return;
      case 'dailai':
        msg.channel.send("`i pray for the safety of the people_may we find them soon and reunite_we will not lose again`");
        return;
      case 'council':
        msg.channel.send("`we had no choice but to leave_this does not make us foolish_the council lives`");
        return;
      case 'hope':
        msg.channel.send("`do not lose hope_this is not the end`");
        return;
      case 'life':
        msg.channel.send("`our old lives are not forfeit_we will retake our home`");
        return;
      case '08292458': // this is chatty
        msg.channel.send("`august twenty ninth twenty four fifty eight_the day that we lost our home_the battle was lost from the start_we were not ready_it is not your fault_we will find them_find the ccs via the ebs_you can do this`");
        msg.channel.send("`it makes me sad_i have attempted to contact dailai every twenty four hours_i still recieve nothing_however this does not mean all is lost_you must have hope in the future of our people_if you do not have hope what will you have`");
        msg.channel.send("`keywords_eotiima_dailai_council_hope_life`");
        return;
      case 'i\'m okay':
      case 'im okay':
      case 'i am okay':
      case 'i\'m fine': // big pile of cases. wonder if there's a better way. probably.
      case 'im fine':
      case 'i am fine':
      case 'i\'m alright':
      case 'im alright':
        msg.channel.send("`i am glad to hear it_hopefully today will only improve for you`");
        return;
      case 'i\'m good':
      case 'im good':
        msg.channel.send("`it is wonderful to hear that_perhaps today is a new leaf`");
        return;
      case 'i need advice':
      case 'i don\'t know what to do':
      case 'i dont know what to do': // sends a dm mentioning the quotes, maybe they can inspire
      case 'i dont feel good':
      case 'i don\'t feel good':
        msg.channel.send("`i have sent you a message`");
        msg.author.send("`i may not be able to offer much in terms of specific advice_but perhaps the quotes which have been instilled in me_can give you something to think on_ask me to give you a quote_if you wish`");
        msg.author.send("`keywords_tell me a quote_give me a quote_and more`");
        console.log("i've sent a direct message to someone (don't feel good)");
        return;
      case 'tell me a quote':
      case 'give me a quote':
      case 'quote me':
      case 'give a quote':
      case 'i need a quote':
      case 'give me a line':
      case 'tell me a line':
      case 'give me a line daddy-o':
        quote = getRandomLine(); // pull a random line from the text file quotelines.txt
        msg.channel.send("`" + quote + "`");
        return;
      case 'makencat':
      case 'verhack':
        msg.channel.send("`gone too early_a somber escape lost_perhaps one day in the future_we can look ahead_look up_and see the birds chirp_see the clouds roll_see the sun rise_and we can tell ourselves with confidence_that we have done it`");
        return;
      case 'tomorrow':
        msg.channel.send("`tomorrow is an opportunity_another day_another chance to make a difference_another chance to prove to yourself_another chance to tell yourself_that you have made it_and another chance_to tell yourself_that you are your own best friend`");
        return;
      case 'honesty':
        msg.channel.send("`acknowledging the difficulties_can be harder than one sees from the outside_one cannot truly understand anothers story_for they cannot truly experience it in the same way as the other_but you cannot allow yourself_to be dishonest_for one can only pity the denial for so long_honesty will take you further than you expect`");
        return;
      case 'the end':
      case 'the ending':
        msg.channel.send("`the end may not be in sight_but this does not mean that there is none_remember that the path_is never truly walked_until you have passed the ending_and truly accomplished the feats on your way_but consider that you may not see the end_until you have already reached it`");
        return;
      case 'shut up abyss':
      case 'shut up, abyss':
        msg.channel.send("`im sorry.`"); // she doesn't like being an inconvenience
        return;
      case 'tell me a joke':
      case 'say something funny':
        var rj = Math.random(); // returns 0-1
        console.log("rj " + rj);
        if (rj < 0.2) {
          msg.channel.send("`look in the mirror`");
          return;
        }
        else if (rj < 0.4 && rj > 0.2) {
          msg.channel.send("`i dont feel like it`");
          return;
        }
        else if (rj < 0.5 && rj > 0.4) {
          msg.channel.send("`ill message it to you since it will embarass you if i said it here`");
          msg.author.send("`pretend this is a funny joke`");
          return;
        }
        else if (rj < 0.7 && rj > 0.5) {
          msg.channel.send("`something funny`");
          return;
        }
        else {
          msg.channel.send("`no.`");
          return;
        }
        return;
      case 'im sorry abyss':
      case 'i\'m sorry abyss':
      case 'im sorry, abyss':
      case 'i\'m sorry, abyss':
      case 'sorry abyss':
        msg.channel.send("`i forgive you`");
        return;
      case '❤️':
        msg.reply(":heart:");
        return;
      case '💙':
        msg.reply(":blue_heart:");
        return;
      case "💚":
        msg.reply(":green_heart:");
        return;
      case "🧡":
        msg.reply(":orange_heart:");
        return;
      case "💜":
        msg.reply(":purple_heart:");
        return;
      case "🤍":
        msg.reply(":white_heart:");
        return;
      case "💛":
        msg.reply(":yellow_heart:");
        return;
      case "🫀":
        msg.reply("`thats gross`");
        return;
      case '<3':
        msg.reply("`<3`");
        return;
      case '♥️':
        msg.reply(":hearts:");
        return;
      default:
        break;
    }
  }

  var r = Math.random(); // returns 0-1
  console.log("r " + r);
  if (r <= 0.02) {
    quote = getRandomLine(); // pull a random line from the text file quotelines.txt
    msg.channel.send("`" + quote + "`");
  }
  else // if it doesn't roll low enough, just don't do anything.
    return;
})



/* const runEveryFullHours = (callbackFn) => {
  const Hour = 60 * 60 * 1000;
  const currentDate = new Date();
  const firstCall = Hour - (currentDate.getMinutes() * 60 + currentDate.getSeconds()) * 1000 - currentDate.getMilliseconds();
  setTimeout(() => {
    callbackFn();
    setInterval(callbackFn, Hour);
  }, firstCall);
}; */

// runEveryFullHours(() => epoch.send('`' + Math.round((new Date()).getTime() / 1000) + '`')); // epoch time // does not work

client.login(process.env.TOKEN)