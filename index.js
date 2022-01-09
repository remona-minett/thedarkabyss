const keepAlive = require("./server")
keepAlive();
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_VOICE_STATES"] })

const { joinVoiceChannel } = require('@discordjs/voice'); // voice channel shenanigans
client.on('messageCreate', msg => {
    if(msg.content.toLowerCase() === 'accompanyme') {
        joinVoiceChannel({
            channelId: msg.member.voice.channel.id,
            guildId: msg.guild.id,
            adapterCreator: msg.guild.voiceAdapterCreator
        })
    }
})


// thedarkabyss v1.4 - the godliness update

const epoch = client.channels.cache.get('929283437704134666'); // #abyss-room // this does not work
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

client.on("messageCreate", msg => {
  if (msg.author.bot) return;
  else {
    switch (msg.content.toLowerCase()) { // big list of things abyss can say
      case 'test':
        msg.channel.send("`i hear you`");
        return;
      case 'testme':
        msg.author.send("`this conversation is private_keep it safe`");
        return;
      case 'help':
      case 'help me':
        msg.channel.send("`what can i do_you need only speak your mind`");
        return;
      case 'thank you, abyss':
      case 'thank you abyss':
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
        msg.channel.send('`hello`');
        return;
      case 'hi abyss':
      case 'hello abyss':
      case 'sup abyss':
      case 'greetings abyss':
        msg.channel.send('`hello_please take care of yourself today_you are important`');
        return;
      case 'good morning abyss':
      case 'goodmorning abyss':
      case 'gm abyss':
        msg.channel.send('`good morning_please enjoy your day_i will be here if you need me`');
        return;
      case 'good night abyss':
      case 'goodnight abyss':
      case 'gn abyss':
        msg.channel.send('`rest well_i hope to see you soon_please take care of yourself`');
        return;
      case 'good morning':
      case 'goodmorning':
      case 'gm':
        msg.channel.send('`another day_another chance to smile`');
        return;
      case 'good night':
      case 'goodnight':
      case 'gn':
        msg.channel.send('`peaceful sleep and_good dreams to you`');
        return;
      case 'goodbye':
      case 'bye':
      case 'cya':
        msg.channel.send('`good bye_please be safe`');
        return;
      case 'someone new, abyss':
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
      case '08292458':
        msg.channel.send("`august twenty ninth twenty four fifty eight_the day that we lost our home_the battle was lost from the start_we were not ready_it is not your fault_we will find them_find the ccs via the ebs_you can do this`");
        msg.channel.send("`it makes me sad_i have attempted to contact dailai every twenty four hours_i still recieve nothing_however this does not mean all is lost_you must have hope in the future of our people_if you do not have hope what will you have`");
        msg.channel.send("`keywords_eotiima_dailai_council_hope_life`");
        return;
      case 'i\'m okay':
      case 'im okay':
      case 'i am okay':
      case 'i\'m fine':
      case 'im fine':
      case 'i am fine':
      case 'fine':
      case 'okay':
        msg.channel.send("`i am glad to hear it_hopefully today will only improve for you`");
        return;
      default:
        break;
    }
  }
  var r = Math.random(); // returns 0-1
  console.log(r);
  if (r <= 0.02) {
    quote = getRandomLine(); // pull a random line from the text file quotelines.txt
    msg.channel.send("`" + quote + "`");
  }
  else // if it doesn't roll low enough, just don't do anything.
    return;
})



const runEveryFullHours = (callbackFn) => {
  const Hour = 60 * 60 * 1000;
  const currentDate = new Date();
  const firstCall = Hour - (currentDate.getMinutes() * 60 + currentDate.getSeconds()) * 1000 - currentDate.getMilliseconds();
  setTimeout(() => {
    callbackFn();
    setInterval(callbackFn, Hour);
  }, firstCall);
};

// runEveryFullHours(() => epoch.send('`' + Math.round((new Date()).getTime() / 1000) + '`')); // epoch time // does not work

client.login(process.env.TOKEN)