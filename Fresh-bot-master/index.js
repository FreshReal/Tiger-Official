const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('SUNT GATA!');
});

client.on('message', message => { //aici este difinirea la message

    if (message.content === 'ping') {
        message.channel.send(`PONG`)
    }

if (message.content.toLowerCase().includes('https://discord.gg')) { //mesajul detectat este https://discord.gg
    const culoare = new Discord.RichEmbed() //embedul este definit ca culoare
    if(!message.guild.member(client.user).hasPermission(`MANAGE_MESSAGES`)) return //daca autorul are acces la sters mesaje botul trece peste si nu sterge mesajul
    //message.channel.send('Nu am acces sa sterg mesajul!')
    if(message.author.bot) return //daca un bot face reclama botul respectiv trece peste si nu sterge mesajul
    if (message.author.id === message.guild.owner.user.id) return; //ownershipul are acces la tot, deci are acces si al sters mesaje deci nu o sa ii fie sters mesajul
    message.delete() //definirea prin care botul sterge mesajul
    culoare.addField('Reclama?', `${message.author} nu ai voie sa promovezi servere pe aici!`) //mesajul dupa ce a sters reclama
    culoare.setColor(`ff0000`) //culoarea
    message.channel.send(culoare); //trimite mesajul
}
}); //si aici se incheie, tot ce e dupa }); nu mai este definit, uite un exemplu

client.login('NDYwODMwMzE1Mjc2MTQwNTU2.DhPoiw.hzUuItkL64LbWpkqNxGA2Tn5GZ0')