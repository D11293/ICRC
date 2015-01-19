/***********************
* Auteur: Denis Gerber *
* Date: 27 août 14     *
* Lieux: Renens        *
* Type: JS             *
***********************/

//déclaration de la variable et affection à la date du jour
var ladate=new Date();
//déclaration du tableau des jours
var tab_jour=new Array("Sunday, ", "Monday, ", "Tuesday, ", "Wednesday, ", "Thursday, ", "Friday, ", "Saturday, ");
//déclaration du tableau des mois
var tab_mois=new Array("January", "February", "March", "April, ", "May", "Juny", "Jully","August","September","October","November","December");
//écriture du jour (1-7) et du mois (1-12) dans le document
document.write(tab_jour[ladate.getDay()]+tab_mois[ladate.getMonth()]);