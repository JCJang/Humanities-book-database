const AuthorInit = ({selectedAuthor}) => {


  const getYear = (date)=> {
    if(!date){return "undefined"}
    if(date.slice(0,1)==="-"){
      const year = `${date.slice(1,5)} B.C.`
      return year;

    }else{
      const year = date.match(/^\d*/);
      return year;
    }
  }


  const log1 = `235		Battle at the Harzhorn
260		The Romans make Cologne their capital city.
297		The Roman emperor allowed the Salian Franks to settle among the Batavi.
4th century
Year	Date	Event
310		A bridge was constructed near Cologne.
313		The Roman Catholic Diocese of Cologne was founded.
314		The Roman Catholic Diocese of Mainz was founded.
357		The Battle of Strasbourg took place.
368		The Battle of Solicinium took place.
5th century
Year	Date	Event
406	December 31	Battle of Mainz, Crossing of the Rhine
450		King Chlodio of the Salian Franks died.
Chlodio's son Merovech became king of the Salian Franks with the support of the Western Roman dux Flavius Aetius.
451	20 June	Battle of the Catalaunian Plains: The Franks joined a coalition led by the Western Roman Empire which defeated the Huns in modern northeastern France.
457		Merovech died. He was succeeded as king of the Salian Franks by his son Childeric I.
463		Battle of Orleans (463): The Salian Franks and forces loyal to the magister militum Aegidius defeated an attack by the Visigothic Kingdom at Orléans.
481		Childeric died. He was succeeded as king of the Salian Franks by his son Clovis I.
486		Battle of Soissons (486): An alliance of Franks led by Clovis defeated the Kingdom of Soissons. Syagrius, the king of Soissons and son of Aegidius, fled to the Visigothic Kingdom.
The Visigoths surrendered Syagrius to the Salian Franks to be executed.
496		Battle of Tolbiac: A Frankish force under Clovis defeated the Alemanni in modern Zülpich. The former credited his victory to Jesus.[1][2][3][4][5]
Clovis was baptized Catholic at Reims.
500		Clovis commissioned the Salic Law, the first written code of civil law among the Franks. The law forbade women from inheriting land.
6th century
Year	Date	Event
507		Battle of Vouillé: A Frankish force led by Clovis defeated the Visigothic Kingdom at Vouillé. The Visigothic king Alaric II was killed. Clovis annexed Aquitaine.[6]
508		Clovis was crowned king of the Franks with his capital at Paris.
511		First Council of Orléans: A synod of Catholic bishops called by Clovis at Orléans granted some legal powers and immunities to the Catholic Church.
28 November	Clovis died. His domain was split among his four sons Theuderic I, Chlodomer, Childebert I and Chlothar I the Old, who became kings ruling at Reims, Orléans, Paris, and Soissons, respectively.
524	25 June	Battle of Vézeronce: A Frankish invasion of Burgundy was halted near modern Vézeronce-Curtin. The Burgundian king Sigismund of Burgundy was captured and Chlodomer was killed.
Chlodomer's wife Guntheuc married Chlothar.
Chlothar had two of Chlodomer's sons killed. The third, Clodoald, fled to Provence.
531		Battle of the Unstrut River (531): Theuderic conquered the Thuringii near the Unstrut.
532		Battle of Autun: Childebert and Chlothar defeated Burgundy near Autun.
534		Theuderic died. His son Theudebert I inherited his throne.
The Burgundian king Godomar was killed by Frankish forces.
30 April	The pro-Byzantine regent of the Ostrogothic Kingdom, Amalasuntha, was murdered on the orders of her cousin and coregent Theodahad.
Gothic War (535–554): The Byzantine Empire invaded the Ostrogothic Kingdom.
535		Council of Clermont (535): A synod was held in modern Clermont-Ferrand which limited the rights of Catholic bishops to appeal to the state and which condemned marriage between Christians and Jews and between relatives.
539		Gothic War (535–554): Frankish forces under Theudebert I drove Byzantine and Ostrogothic armies from their encampments on the Po.
November	Gothic War (535–554): The Frankish army on the Po, suffering from dysentery, surrendered to the Byzantines.
548		Theudebert I died. His son Theudebald inherited his kingdom.
549	October	Fifth Council of Orléans: A synod presided over by Sacerdos of Lyon in Orléans condemned Nestorianism and simony.
554		Battle of the Volturnus (554): A Byzantine force cut off and destroyed a joint Frankish-Ostrogothic army at their camp on the Volturno.
555		Theudebald died, childless. His kingdom passed to Chlothar.
Garibald, head of the frankisch Agilolfing noble family becomes the first Duke of Bavaria
558	13 December	Childebert I died without male heirs. Chlothar inherited his kingdom.[7]
560	December	Conomor, king of Domnonée, who had allied with Chlothar's son Chram against him, was killed in battle by Chlothar's forces.
561		Chram was captured and executed.
29 November	Chlothar died of pneumonia. His kingdom was divided among his surviving sons Charibert I, Guntram, Sigebert I and Chilperic I.
567	December	Charibert I died. His kingdom was divided among his brothers Guntram, Chilperic I and Sigebert I, the latter of whose domains become known as Austrasia, the eastern land, with its capital at Metz.
575		Sigebert I died. He was succeeded by his young son Childebert II, with his wife Brunhilda of Austrasia acting as regent.
577		Guntram's sons died of dysentery.
584	September	Chilperic I was stabbed to death. His infant son Chlothar II the Great, the Young inherited his kingdom under the regency of his mother Fredegund.
587		Guntram and Brunhilda agreed to the Treaty of Andelot, according to which the former adopted Childebert II as his son and heir.
591		Childebert II appointed Tassilo I of Bavaria king of Bavaria.
592	28 January	Guntram died. His kingdom passed to Childebert II.
595		Childebert II died. Austrasia was divided between his two sons Theudebert II and Theuderic II.
599		Theudebert II expelled Brunhilda from his kingdom.
Theuderic II declared war on Theudebert II.
7th century
Year	Date	Event
602		The Duchy of Gascony was created as a buffer state against the Vascones and the Visigothic Kingdom.
612		Theuderic II captured Theudebert II in battle in modern Zülpich.
Theudebert II was killed in captivity along with his son on Brunhilda's orders. Theuderic II inherited his kingdom as king of unified Austrasia.
613		Theuderic II died of dysentery. His young bastard son Sigebert II became king of Austrasia under the regency of Brunhilda.
Chlothar the Great invaded Austrasia. The Austrasian mayor of the palace Warnachar II recognized him as regent and ordered the army not to resist.
Brunhilda, Sigebert II and Sigebert's brother were executed on Chlothar the Great's orders. The latter annexed Austrasia.
614	18 October	Chlothar the Great issued the Edict of Paris. Among its provisions, the edict banned Jews from holding royal office and granted the nobility the exclusive power to appoint royal officers.
617		Chlothar the Great made the office of the mayor of the palace a lifetime appointment.
623		Chlothar the Great donated Austrasia to his son Dagobert I.
Dagobert I took Arnulf of Metz, the bishop of the Roman Catholic Diocese of Metz, as an adviser and appointed the Austrasian noble Pepin of Landen his mayor of the palace.
629	18 October	Chlothar the Great died.
Dagobert I laid claim to Chlothar the Great's territory with the exception of Aquitaine, which he left to his half-brother Charibert II.
Dagobert I dismissed Pepin of Landen as mayor of the palace.
631		Battle of Wogastisburg: An invading Frankish army was defeated by Samo's Empire.
Dagobert I established the Duchy of Thuringia on the former territory of the Thuringii.
632		Charibert II was killed on the orders of Dagobert I.
Charibert II's infant son Chilperic of Aquitaine was killed on the orders of Dagobert I, who established the Duchy of Aquitaine on his territories with the patrician Felix of Aquitaine as duke.
The nobility of Austrasia joined a revolt led by Pepin of Landen.
634	January	Dagobert I ceded Austrasia to his young son Sigebert III, with Adalgisel acting as coregent and mayor of the palace of Austrasia and the bishop Cunibert acting as coregent.
639	19 January	Dagobert I died. His kingdom passed to his young son Clovis II, with his wife Nanthild acting as regent.
Pepin of Landen replaced Adalgisel as mayor of the palace of Austrasia.
640	27 February	Pepin of Landen died.
Otto (mayor of the palace) was appointed mayor of the palace of Austrasia.
643		Otto was murdered by duke Leuthari II on the orders of Pepin of Landen's son Grimoald the Elder, who succeeded him as mayor of the palace of Austrasia.
650		Synod of Rouen: A Catholic synod was held in Rouen which again condemned simony.
656	1 February	Sigebert III died. Grimoald the Elder tonsured Sigebert's son Dagobert II and declared his own son Childebert the Adopted, whom Sigebert III had adopted while still childless, king of Austrasia.
657	27 November	Clovis II died. His kingdom passed to his young son Chlothar III, under the regency of his wife Balthild.
661		Chlothar III conquered Austrasia and executed Grimoald the Elder and Childebert the Adopted.
662		Chlothar III ceded Austrasia to his young brother Childeric II and appointed Wulfoald his regent and mayor of the palace.
673		Chlothar III died. His younger brother Theuderic III inherited his kingdom with the support of his mayor of the palace Ebroin.
Childeric II invaded and annexed Theuderic III's kingdom.
675		Childeric II was killed along with his wife Bilichild and a son, Dagobert, by a conspiracy of nobles.
Theuderic III reclaimed his kingdom.
Clovis III became king of Austrasia.
676		Clovis III died.
Dagobert II became king of Austrasia with the support of Wulfoald.
679	23 December	Dagobert II was murdered, probably on Ebroin's orders. Theuderic III inherited his kingdom.
680		Wulfoald died.
Pepin of Herstal, the son of Arnulf's son Ansegisel and Pepin of Landen's daughter Begga, became mayor of the palace of Austrasia.
687		Battle of Tertry: Austrasian forces loyal to Pepin of Herstal defeated the invading army of Theuderic III at modern Tertry, Somme. Pepin of Herstal accepted Theuderic's unification of the Frankish kingdoms on the condition that he replace Berchar as his mayor of the palace.
Pepin of Herstal took the title Duke of the Franks.
690		Battle of Dorestad: A Frankish force conquered Dorestad from the Frisian Kingdom.
691		Theuderic III died. He was succeeded by his young son Clovis IV.
695		Clovis IV died. He was succeeded by his young brother Childebert III the Just.
Pepin of Herstal appointed his sons Drogo of Champagne and Grimoald the Younger mayors of the palaces in Neustria and Burgundy, respectively.
8th century
Year	Date	Event
708		Drogo died.
711	23 April	Childebert the Just died. His young son Dagobert III succeeded him as king of the Franks.
714		Grimoald the Younger was assassinated.
16 December	Pepin of Herstal died. His son Theudoald succeeded him as mayor of the palace of Austrasia and in the west, with his mother Plectrude as regent.
715		Dagobert III appointed Ragenfrid mayor of the palace in the west.
26 September	Battle of Compiègne: Forces loyal to Ragenfrid defeated an army loyal to the young Theudoald, forcing him to flee to Cologne.
Pepin of Herstal's illegitimate son Charles Martel was acclaimed mayor of the palace of Austrasia by the Austrasian nobility.
Dagobert III died. He was succeeded by Chilperic II, his cousin and a son of Childeric II.
716		Battle of Cologne: A Frisian army joined by the forces of Chilperic II conquered Cologne in Austrasia, forcing Charles to flee to the Eifel and compelling Plectrude to accept Chilperic II as king.
Battle of Amblève: Charles defeated the forces of Frisia and Chilperic II at Amel.
717	21 March	Battle of Vincy: Charles dealt Chilperic II a decisive defeat at modern Les Rues-des-Vignes and subsequently declared Chlothar IV king of Austrasia.
718		Battle of Soissons (718): Charles defeated the armies of Chilperic II and Aquitaine at Soissons. Chilperic II fled to Aquitaine.
Charles recognized Chilperic II as king of the Franks in exchange for his appointment as mayor of the palace with extensive powers.
Chlothar IV died.
719		Umayyad invasion of Gaul: The Umayyad Caliphate conquered Narbonne.
721	13 February	Chilperic II died. He was succeeded by Dagobert III's son Theuderic IV.
Battle of Toulouse (721): An Aquitainian force broke an Umayyad siege of Toulouse.
732		Battle of the River Garonne: An Umayyad army wiped out an Aquitainian force on the Garonne.
10 October	Battle of Tours: Charles, joined by the Duchy of Aquitaine and the Kingdom of the Lombards, dealt a decisive defeat to the Umayyad Caliphate near modern Vouneuil-sur-Vienne. Abdul Rahman Al Ghafiqi, the Umayyad governor of al-Andalus, was killed.
734		Battle of the Boarn: A Frankish army led by Charles defeated and annexed the Frisian Kingdom and killed its king, Bubo, Duke of the Frisians.
736		Battle of Nîmes: Charles destroyed the Umayyad Septimanian cities of Nîmes, Agde, Béziers and what is now Villeneuve-lès-Maguelone.
737		Battle of Avignon: Charles breached and burned the Umayyad-held city of Avignon.
Battle of Narbonne (737): Charles besieged but failed to capture the Umayyad-held city of Narbonne.
Battle of the River Berre: Charles intercepted and destroyed an Umayyad army sent to relieve his siege of Narbonne near the Étang de Berre.
Theuderic IV died. Charles prevented his succession.
740		Charles divided his lands between his two elder sons Carloman and Pepin the Short, the former ruling as king in the east and the latter in the west.
741	22 October	Charles died.
742	21 April	Concilium Germanicum: A synod called by Carloman and presided over by Saint Boniface settled some issues of Catholic ritual and organization. The Rule of Saint Benedict became mandatory in Frankish monasteries.
743		Childeric III was appointed king of the Franks.
746		Council of Cannstatt: Carloman executed the Alemanni nobility, numbering in the thousands, in modern Stuttgart.
747	15 August	Carloman retired to live as a monk in Rome. His son Drogo succeeded him as mayor of the palace.
751	March	The pope Pope Zachary deposed Childeric III as king of the Franks at the urging of Pepin the Short.
An assembly of Frankish nobles elected Pepin the Short king.
752		Siege of Narbonne (752–59): Pepin the Short laid siege to Narbonne, still held by forces loyal to Yusuf ibn 'Abd al-Rahman al-Fihri, governor of Al-Andalus under the defunct Umayyad Caliphate.
753		Drogo was tonsured and forced to live in a monastery.
755		Pepin the Short closed or nationalized the private mints and fixed pence and shillings to the silver French denier.
756		Pepin the Short gave the Donation of Pepin, territories ceded by the Kingdom of the Lombards under military pressure, to the pope, Pope Stephen II.
759		Siege of Narbonne (752–59): The defenders of Narbonne opened the city gates to the Franks.
768	24 September	Pepin the Short died. His kingdom was divided between his sons Charlemagne and Carloman I, with the latter receiving territories including the Paris Basin, the Massif Central, Provence, southern Austrasia and Alsace.
770		Charlemagne married Desiderata of the Lombards, a daughter of Desiderius, the king of the Kingdom of the Lombards.
771	4 December	Carloman I died. His widow Gerberga, wife of Carloman I fled with his two sons to the Kingdom of the Lombards.
Charlemagne repudiated his marriage to Desiderata.
772	1 February	Pope Stephen III died. Pope Adrian I was elected to succeed him as pope.
Adrian demanded that Desiderius cede to the Papal States the territory surrendered in 756.
Saxon Wars: Charlemagne invaded the territory of the Saxons and destroyed their sacred symbol Irminsul near Paderborn.
773	September	Siege of Pavia (773–74): Charlemagne laid siege to the Lombard capital Pavia.
774	June	Siege of Pavia (773–74): Desiderius opened the gates of Pavia and surrendered to Charlemagne.
10 July	Charlemagne was crowned with the Iron Crown of Lombardy king of the Lombards at Pavia.
776		Charlemagne established the March of Friuli on the territory of the old Duchy of Friuli.
778	15 August	Battle of Roncevaux Pass: A Basque force attacked and decimated Charlemagne's army in the Roncevaux Pass.
781	15 April	Charlemagne appointed his son Pepin of Italy king of Italy.
782		Battle of Süntel: A Saxon force led by Widukind defeated a Frankish expedition.
October	Massacre of Verden: Charlemagne had some forty-five hundred Saxon captives murdered at modern Verden an der Aller.
785		Saxon Wars: The Saxon leader Widukind converted to Christianity and pledged fealty to Charlemagne.
Charlemagne issued the Capitulatio de partibus Saxoniae, a legal code which, among other clauses, prescribed the death penalty for any Saxons who refused to convert to Christianity.
Council of Paderborn: A council held at Paderborn outlawed idolatry and called for the death penalty for anyone who had caused another to be executed for witchcraft.
789		Charlemagne issued the Admonitio generalis, reforming the Christian liturgy in his empire and calling for the establishment of schools.
795		Charlemagne established the Marca Hispanica between the Pyrenees and the Ebro.
799		Siege of Trsat: Eric of Friuli, the duke of Friuli and an officer of Charlemagne, was killed during a failed siege of Trsat, in Croatia.
26 December	The pope Pope Leo III was assaulted in Rome and nearly mutilated before his rescue and flight to the Duchy of Spoleto.
800	November	Charlemagne arrived in Rome.
23 December	Leo took an oath of innocence of the charges of his political enemies. Charlemagne ordered them exiled.
25 December	Leo crowned Charlemagne Holy Roman Emperor.
9th century
Year	Date	Event
802		Charlemagne issued the Capitularia missorum specialia, defining the office of the missus dominicus, a salaried emissary to the kingdom.
803		Charlemagne issued the Lex Saxonum, allowing Saxon customs which were not contradictory to Christianity and granting some rights and protections to the church in the Saxon lands.
804		Charlemagne organized the Duchy of Saxony on the territories of the conquered Saxons.
810	8 July	Pepin of Italy died. He was succeeded as king of Italy by his illegitimate son Bernard of Italy.
811		Charlemagne and Hemming of Denmark, the king of Denmark, signed the Treaty of Heiligen, promising peace and fixing their border at the Eider.
812		Charlemagne established the March of Tuscany.
813	13 September	Charlemagne crowned his son Louis the Pious, the Fair, the Debonaire co-Holy Roman Emperor.
814	28 January	Charlemagne died.
816		Battle of Pancorbo (816): Forces loyal to the Frankish vassal Velasco the Gascon were routed by the Emirate of Córdoba at Pancorbo.
August	Synods of Aachen (816–819): A synod was called at the Palace of Aachen in Aachen which would conform monks to the Rule of Saint Benedict and separate them from canons, who were called to live according to the Institutio canonicorum Aquisgranensis.
817		Louis the Pious appointed his son Pepin I of Aquitaine king of Aquitaine, his son Louis the German king of Bavaria, and his son Lothair I co-Holy Roman Emperor with the promise of receiving his other domains.
818	17 April	Bernard died, two days after being blinded with a hot poker on Louis the Pious's orders. Lothair I inherited Italy.
819		Louis the Pious issued the Notitia de servitio monasteriorum, which listed monasteries in his kingdom and the services they owed the crown.
823	5 April	Lothair I was crowned Holy Roman Emperor in Rome by the pope Pope Paschal I.
824		Battle of Roncevaux Pass (824): A combined Basque-Banu Qasi force defeated a Frankish pacifying expedition at Roncevaux Pass.
829		Louis the Pious promised the inheritance of Alamannia to his son Charles the Bald.
830	May	A rebellion of Pepin I of Aquitaine, Louis the German and Lothair I, instigated in part by Wala of Corbie, the abbot of Corbie Abbey, captured their father Louis the Pious at Compiègne and forced their stepmother, Charles the Bald's mother Judith of Bavaria (died 843), into a nunnery.
Pepin I of Aquitaine and Louis the German declared their loyalty to their father Louis the Pious against Lothair I in exchange for the promise of a greater portion of his inheritance. Wala was deposed as abbot of Corbie Abbey and Judith returned to her husband's court.
832		Louis the Pious declared Charles the Bald king of Aquitaine and promised Lothair I the rest of his kingdom in the face of an uprising by Pepin I of Aquitaine and Louis the German.
833		Lothair I joined the rebellion of his brothers Pepin I of Aquitaine and Louis the German against his father Louis the Pious.
Louis the Pious met his sons Pepin I of Aquitaine, Louis the German and Lothair I and their armies, as well as the pope, Pope Gregory IV, at the Field of Lies near Colmar.
13 November	Ebbo, archbishop of the archdiocese of Reims, presided over a synod in Soissons which deposed Louis the Pious as Holy Roman Emperor.
834	1 April	Louis the Pious was restored as Holy Roman Emperor with the support of the Frankish nobility.
835	2 February	Synod of Thionville: Ebbo publicly recanted his charges against Louis the Pious at a synod at Thionville.
836		Louis the Pious appointed Lothair I king only of Italy; all else was divided between Pepin I of Aquitaine, Louis the German and Charles the Bald.
837		Louis the Pious crowned Charles the Bald king of Alamannia and Burgundy, granting him some lands which were before promised to Louis the German. Louis the German rose in revolt; Louis the Pious responded by promising all his lands save Bavaria to Charles the Bald.
838	13 December	Pepin I of Aquitaine died. Louis the Pious appointed Charles the Bald king of Aquitaine.
839		The Aquitainian nobility rebelled in favor of Pepin I of Aquitaine's son Pepin II the Younger of Aquitaine. Louis the German invaded Swabia.
840		Louis the Pious and Lothair I agreed to a division of the empire after the former's death, with Charles the Bald inheriting the western part and Lothair I inheriting the eastern, including Italy.
Defeated by the forces of Louis the Pious and Lothair I, the Aquitainian nobility accepted Charles the Bald as king of Aquitaine.
Louis the Pious and Lothair I defeated the armies of Louis the German.
23 February	Lothair I and Pietro Tradonico, doge of the Republic of Venice, signed the Pactum Lotharii, reiterating earlier agreements between the Franks and the Byzantine Empire.
20 June	Louis the Pious died. Lothair I claimed the whole inheritance of his territories as Holy Roman Emperor.
841	25 June	Battle of Fontenoy: The forces of Charles the Bald and Louis the German dealt a decisive defeat to Lothair I and Pepin the Younger at Fontenoy.
An uprising began among Saxon peasants who called themselves the Stellinga.
842	12 February	Louis the German and Charles the Bald took the Oaths of Strasbourg, in which each pledged to aid the other against Lothair I. Their soldiers pledged not to obey an order counter to this oath.
843	August	The Treaty of Verdun was signed, ending the war between Charles the Bald, Lothair I, and Louis the German, who received West Francia, Middle Francia, and East Francia, respectively. Lothair I retained the title Holy Roman Emperor.
844	15 June	Lothair I's son Louis II of Italy was crowned Holy Roman Emperor jointly with his father in Rome by the pope Pope Sergius II.
855	19 September	Lothair I and his sons signed the Treaty of Prüm in Schüller. On his death Louis II of Italy was to become Holy Roman Emperor and king of Italy, Lothair II king of Lotharingia, and Charles of Provence king of the rest of his domains.
29 September	Lothair I died.
869	8 August	Lothair II died. Lotharingia passed to his brother Louis II, at that time away at war with the Emirate of Bari.
870	8 August	Louis the German and Charles the Bald signed the Treaty of Meersen, under which they agreed to partition Lotharingia between themselves.
875	12 August	Louis II died. He left Italy and the title of Holy Roman Emperor to his cousin, Louis the German's son Carloman of Bavaria.
Charles the Bald was crowned king of Italy at Pavia with the Iron Crown of Lombardy with the support of the pope Pope John VIII.
29 December	Charles the Bald was crowned Holy Roman Emperor in Rome by the pope Pope John VIII.
876	28 August	Louis the German died. His kingdom was divided along ethnic lines among his sons Carloman of Bavaria, Louis the Younger and Charles the Fat, who received, roughly, Bavaria, Saxony, and Swabia, respectively.
Carloman of Bavaria appointed his illegitimate son Arnulf of Carinthia duke of Carinthia.
8 October	Battle of Andernach (876): Louis the Younger defeated an attempted West Frankish invasion of East Francia across the Rhine near Andernach.
877	6 October	Charles the Bald died. Carloman of Bavaria conquered Italy. West Francia Passed to his son, Louis the Stammerer.
879		Carloman of Bavaria was incapacitated, probably by a stroke.
November	Carloman of Bavaria abdicated Bavaria and Italy to his brothers Louis the Younger and Charles the Fat, respectively.
880	February	Battle of Thimeon: Louis the Younger destroyed a Viking camp near modern Charleroi.
February	Louis the Younger signed the Treaty of Ribemont with Louis III of France and Carloman II, kings ruling jointly in West Francia, recognizing some territorial gains he had made in Lotharingia.
881	12 February	Charles the Fat was crowned Holy Roman Emperor by the pope Pope John VIII.
882	20 January	Louis the Younger died. His brother Charles the Fat inherited his kingdom.
Siege of Asselt: The Viking leader Godfrid, Duke of Frisia was besieged in his camp in the valley of the Meuse by East Frankish forces. After converting to Christianity he was granted the Kennemerland as a vassal of Charles the Fat.
Wilhelminer War: The Wilhelminers rebelled against Aribo of Austria, the margrave of the East Frankish March of Pannonia.
Wilhelminer War: The Wilhelminers paid homage to Arnulf of Carinthia in exchange for his support against Aribo.
Frankish-Moravian War: Svatopluk I of Moravia, the king of Great Moravia, intervened in Pannonia on the side of Aribo.
884	12 December	King Carloman II of West Francia died on a hunting expedition. His cousin Charles the Fat inherited his kingdom.
885	25 November	Siege of Paris (885–86): Some three hundred Viking ships arrived at Paris.
886	October	Siege of Paris (885–86): The army of Charles the Fat arrived in Paris. He allowed the Viking fleet to sail to Burgundy, then in revolt.
887	November	An assembly of East Frankish nobles at Trebur deposed Charles the Fat in favor of his nephew Arnulf of Carinthia.
26 December	Berengar I of Italy, the margrave of Friulu, was crowned king of Italy at Pavia by the Italian nobility.
888	13 January	Charles the Fat died.
The nobility in Upper Burgundy elected Rudolph I of Burgundy king.
February	The Count of Paris Odo of France was crowned king of France at Compiègne following his election by the French nobility.
891	21 February	The pope Pope Stephen V crowned Guy III of Spoleto, his preferred claimant to the throne of Italy, Holy Roman Emperor.
September	Battle of Leuven (891): An East Frankish force repelled a Viking invasion at modern Leuven.
892	30 April	Guy's son Lambert of Italy was crowned co-Holy Roman Emperor with his father at Ravenna by the pope, Pope Formosus.
894	12 December	Guy died.
895		Arnulf of Carinthia appointed his illegitimate son Zwentibold king of Lotharingia.
896	21 February	Arnulf of Carinthia, joined by Berengar, conquered Rome from Lambert and freed the pope Pope Formosus from his imprisonment in the Castel Sant'Angelo.
22 February	The pope Pope Formosus crowned Arnulf of Carinthia Holy Roman Emperor.
899	8 December	Arnulf of Carinthia died. His young son Louis the Child succeeded him as king of East Francia.
900		Hungarian conquest of the Carpathian Basin: Hungary conquered the Great Hungarian Plain and the March of Pannonia.
13 August	Zwentibold was killed by Reginar, Duke of Lorraine. His young half-brother Louis the Child inherited his kingdom.
12 October	The king of Provence Louis the Blind conquered Pavia from Berengar, and had himself crowned there king of Italy with the Iron Crown of Lombardy.
10th century
Year	Date	Event
901	22 February	Louis the Blind was crowned Holy Roman Emperor by the pope Pope Benedict IV.
903		Louis the Child issued the Raffelstetten customs regulations, regulating customs on a bridge in modern Asten.
905	21 July	Berengar ordered Louis the Blind stripped of his royal Italian and imperial titles and blinded in Verona.
907	6 July	Battle of Pressburg: An East Frankish army was wiped out by a Hungarian force at modern Bratislava during an attempted reconquest of Pannonia.
908	3 August	Battle of Eisenach (908): An East Frankish army was dealt a crushing defeat by a Hungarian force at Eisenach. Burchard, Duke of Thuringia, the duke of Thuringia, was killed. Thuringia was absorbed into Saxony.
910	12 June	Battle of Lechfeld (910): A Hungarian force decisively defeated an East Frankish army near Augsburg after a feigned retreat.
911	20 September	Louis the Child died. The Lotharingian nobility, led by Reginar, Duke of Lorraine, elected Charles the Simple, king of France, to succeed him.
10 November	Conrad I the Younger of Germany, duke of Franconia, was elected king of East Francia by the rulers of the other East Frankish duchies, the so-called stem duchies of Bavaria, Saxony and Alamannia.
915	December	Berengar was crowned Holy Roman Emperor by the pope Pope John X.
918	23 December	Conrad died from injuries sustained in battle with Arnulf the Bad, Duke of Bavaria, the duke of Bavaria. He was succeeded as duke of Franconia by his younger brother Eberhard of Franconia.
919	24 May	Henry the Fowler, the duke of Saxony and Conrad's choice, was crowned king of Germany after his election by the dukes of the stem duchies.
923	15 June	King Charles the Simple of Lotharingia was captured in battle by French forces.
924	7 April	Berengar was murdered by a member of his retinue.
925		The Lotharingian nobility, led by Gilbert, Duke of Lorraine, elected Henry the Fowler their king.
932		Synod of Erfurt: A synod at Erfurt decided that Germany would cease paying tribute to Hungary.
933	15 March	Battle of Riade: A Hungarian force camped on the Unstrut was put to flight by a German army.
936	2 July	Henry died after a stroke. He was succeeded as duke of Saxony and king of Germany by his son Otto I the Great, Holy Roman Emperor.
Otto the Great created the Billung March, governed by Hermann Billung, and the Marca Geronis.
937	11 July	Rudolph II of Burgundy, the king of Burgundy, died.
Rudolph II's son Conrad I of Burgundy became king of Burgundy with the support of Otto the Great against Hugh of Italy, the king of Italy.
938		Otto the Great deposed the duke of Bavaria Eberhard, Duke of Bavaria, installing his uncle Berthold, Duke of Bavaria on the condition that as king he retain the right to appoint bishops and administer royal property in Bavaria.
939	2 October	Battle of Andernach: A rebellion of Franconia and Lotharingia against Otto the Great was decisively defeated at Andernach. The dukes of Franconia and Lotharingia Eberhard of Franconia and Gilbert were killed. Otto the Great prevented succession in both duchies and dissolved the former.
940		Otto the Great appointed his younger brother Henry I, Duke of Bavaria duke of Lotharingia.
955	10 August	Battle of Lechfeld (955): Otto the Great repelled a Hungarian invasion on the flood plain of the Lech.
16 October	Battle on the Raxa: A German army defeated an Obotrite rebellion in the Billung March, probably on the Recknitz.
962	2 February	Otto the Great was crowned Holy Roman Emperor.
965	20 May	Gero, the margrave of the Marca Geronis, died. The march was divided into five: the Northern March, the Saxon Eastern March, the Margravate of Meissen, the March of Zeitz and the March of Merseburg.
967	25 December	Otto the Great's young son Otto II the Red, Holy Roman Emperor was crowned co-Holy Roman Emperor with his father by the pope Pope John XIII.
972	24 June	Battle of Cedynia: The forces of Odo I, Margrave of the Saxon Ostmark, the margrave of the Saxon Eastern March, were decisively repelled by the Polans near the Oder, possibly near Cedynia.
973	7 May	Otto the Great died.
8 May	The Roman nobility acclaimed Otto the Red his father's successor as Holy Roman Emperor.
976		Otto the Great established the Margraviate of Austria, a march subordinate to Bavaria on the territory of the former March of Pannonia.
981		Wigger I, the margrave of Zeitz, died. Rikdag, the margrave of Meissen, inherited his territory.
982	14 July	Battle of Stilo: A Sicilian army dealt heavy casualties to a Roman force at Capo Colonna. Gunther, Margrave of Merseburg, the margrave of Merseburg, died. Rikdag inherited his territory.
983		Great Slav Rising: An uprising by the Polabian Slavs overthrew German authority in the Northern March and the Billung March.
996	3 May	Bruno of Carinthia was elected Pope Gregory V.
11th century
Year	Date	Event
1046	25 December	Clement II was elected pope.
1048	17 July	Damasus II was elected pope.
1049	12 February	Leo IX was elected pope.
1055	13 April	Victor II was elected pope.
1057	3 August	Stephen IX was elected pope.
1072		Agnes of Germany was born.
1075	28 February	Investiture controversy: A council held at the Lateran Palace concluded that popes alone could appoint, remove and transfer bishops.[8]
1077	28 January	Walk to Canossa: After fasting outdoors in a blizzard for three days, Holy Roman Emperor Henry IV was allowed to enter Canossa Castle and receive forgiveness from Pope Gregory VII for the illegitimate appointment of bishops.
1095	27 November	First Crusade: Pope Urban II called on all Catholics to assist the Byzantine Emperor Alexios I Komnenos in repelling the invading Seljuk Empire.
1096		Rhineland massacres: Crusaders took part in anti-Jewish violence in the Rhineland.
1098		Hildegard of Bingen was born.
12th century
Year	Date	Event
1122	23 September	Investiture Controversy: Pope Callixtus II and Holy Roman Emperor Henry V signed the Concordat of Worms, under which it was agreed that Holy Roman Emperors had the right to grant bishops secular authority but not religious authority.
1143	24 September	Agnes died.
1147		Northern Crusades: A series of crusades began against the pagan peoples around the Baltic Sea.
1152	9 March	Frederick I Barbarossa was crowned Holy Roman Emperor.
1170		Walther von der Vogelweide was born.
1190		A field hospital was established at Acre which would become the nucleus of the Teutonic Order.
The Nibelungenlied was written.
13th century
Year	Date	Event
1201		Valdemar II of Denmark occupied Hamburg.
1210		The Lübeck Cathedral was constructed.
1214	27 July	Battle of Bouvines: The combined forces of Flanders, England, Boulogne and the Holy Roman Empire were dealt a decisive defeat by the French at Bouvines.
1230		St. Nicholas' Church was constructed in Berlin.
1241		Lübeck and Hamburg formed an alliance.
1244		Freie Stadt Mainz was founded in Mainz.
1248		A Fire started in Hamburg.
1273	29 September	Rudolph I was crowned King of the Romans.
1290		Duchy of Cleves captured Duisburg.
1291		Crusades: The Crusades ended.
August	The people of Uri, Schwyz and the Lower Valley joined an alliance under the Federal Charter of 1291.
1298		St. Lawrence church was constructed.
14th century
Year	Date	Event
1338		The prince-electors of the Holy Roman Empire declared in the Declaration of Rhense that the election of the Holy Roman Emperor was not subject to the approval of the pope.
1356		The Imperial Diet issued the Golden Bull of 1356, which fixed the offices of the seven prince-electors and established that the Holy Roman Emperor could be elected by a simple majority vote.
The Hanseatic League was established.
1370		The Treaty of Stralsund was signed, ending a war between Denmark and the Hanseatic League.
1392		The Victual Brothers were hired by the Duchy of Mecklenburg to assist in its fight against Denmark.
1400		The period of Meistersinger lyric poets began.
The period of Minnesänger singers ended.
15th century
Year	Date	Event
1410	15 July	Battle of Grunwald: The Teutonic Order was decisively defeated by the combined forces of Poland and Lithuania at Grunwald.
1414		Council of Constance: An ecumenical council began which would condemn Jan Hus as a heretic, depose Antipopes John XXIII and Benedict XIII, and elect Pope Martin V.
1418		Council of Constance: The council ended.
1455		The Gutenberg Bible, one of the first books in the West made using moveable type, was first printed by Johann Gutenberg.
1471	21 May	Albrecht Dürer was born.
1483	10 November	Martin Luther was born.
1495		The Imperial Diet established the Reichskammergericht, a permanent court of appeal with jurisdiction over the whole of the Holy Roman Empire.
1499		Swabian War: A war between the Old Swiss Confederacy and the House of Habsburg took place in which the Swiss would win an exemption from paying taxes to the Holy Roman Empire and participating in the Imperial Diet.
16th century
Year	Date	Event
1517	31 October	Luther posted the Ninety-Five Theses, a disputation condemning abuses in the Catholic Church, on the door of All Saint's Church in Wittenberg.
1521		Diet of Worms: An Imperial Diet was held at Worms which would condemn Luther as a heretic.
1522	9 January	Adrian VI became pope.
1524		German Peasants' War: An uprising of German-speaking peasants began.
1525		German Peasants' War: The war ended in the defeat of the peasant army.
10 April	Prussian Homage: Grand Master Albert of the Teutonic Order resigned his position and was appointed duke of Prussia by the Polish king Sigismund I the Old.
1529	19 April	Protestation at Speyer: Six fürsten and the representatives of fourteen free imperial cities read out their objection to the imperial ban on Luther and his works at the Imperial Diet at Speyer.
Siege of Vienna: The Ottoman Empire was forced to retreat after the failure of their siege of Vienna.
1546	10 July	Schmalkaldic War: A war began between the Schmalkaldic League of Lutheran principalities and a coalition led by the Holy Roman Empire.
1547	23 May	Schmalkaldic War: The war ended in an imperial victory.
1554		Moritzbastei was constructed as a bastion.
1555	25 September	The Peace of Augsburg was signed, granting princes of the Holy Roman Empire the right to determine the state religion within their territories.
1583		Beginning of the Cologne War.
1588		End of the Cologne War.
1600		The period of Meistersinger lyric poets ended.
17th century
Year	Date	Event
1608	14 May	The Protestant Union, a military alliance of Protestant German princes, was established under the command of Elector Frederick IV of the Palatinate.
1609	10 July	The Catholic League, an alliance of Catholic German princes, was established.
1613		King James I of England, Ireland and Scotland married his daughter Elizabeth Stuart to Elector Frederick V of the Palatinate, leader of the Protestant Union.
1618		Thirty Years' War: A war began which would cause massive devastation and loss of life, primarily in Germany.[9][10]
1629	6 March	Holy Roman Emperor Ferdinand II issued the Edict of Restitution, which demanded that lands expropriated since and in contradiction to the terms of the Peace of Augsburg be restored to the Catholic Church.
1631	20 May	Sack of Magdeburg: Forces under the command of the Holy Roman Empire and the Catholic League breached the walls of the Protestant city of Magdeburg and murdered some twenty thousand of its thirty thousand inhabitants.
17 September	Battle of Breitenfeld: The combined forces of Saxony and the Swedish Empire dealt a decisive defeat to the Holy Roman Empire and its allies near Breitenfeld.
1632	16 November	Battle of Lützen: Forces led by the Swedish Empire defeated forces under the command of the Holy Roman Empire near Lützen. The Swedish king Gustavus Adolphus was killed.
1642	23 October	Battle of Breitenfeld: The Swedish army dealt a decisive defeat to the Holy Roman Empire near Breitenfeld.
1648		Thirty Years' War: The Peace of Westphalia was concluded, ending the war and granting Switzerland and the Netherlands independence from the Holy Roman Empire.
1683	11 September	Battle of Vienna: The combined forces of the Polish–Lithuanian Commonwealth and the Holy Roman Empire and their allies broke an Ottoman siege of Vienna.
1686		The League of Augsburg, a military alliance of European countries, was established to defend the Palatinate from France.
1697	15 September	The elector of Saxony was elected King Augustus II the Strong of the Polish–Lithuanian Commonwealth.
1700	17 July	Leibniz founded the Prussian Academy of Sciences.
18th century
Year	Date	Event
1701	18 January	Frederick I of Prussia crowned himself king; the Duchy of Prussia became the Kingdom of Prussia.
1706		Pachelbel died.
1712	24 January	Frederick II of Prussia, the Great, was born.[11]
1716	14 November	Leibniz died.[12]
1740	11 December	The Prussian king Frederick the Great issued an ultimatum to Austria demanding the cession of Silesia according to the terms of an inheritance treaty.
16 December	Silesian Wars: Prussia invaded Silesia.
1742	28 July	Silesian Wars: The Treaty of Berlin was signed, transferring most of Austria's Silesian territories to Prussia and ending the war.
1745	4 June	Battle of Hohenfriedberg: A Prussian force led by Frederick the Great decisively defeated the allied armies of Austria and Saxony, halting the attempted reconquest of Silesia.
25 December	Silesian Wars: Prussia, Austria and Saxony signed the Treaty of Dresden, confirming Prussia's sovereignty over Silesia and ending the war.
1750	28 July	Bach died.
29 August	Third Silesian War (Seven Years' War): Prussia invaded Saxony.
1763	15 February	Third Silesian War: Prussia, Austria and Saxony signed the Treaty of Hubertusburg, ending the war and restoring the three states' prewar borders.
1786	17 August	Frederick the Great died.[11]
1788		The Abitur, a university admission exam, was established in Prussia.
1789	13 June	French Revolution: The Third Estate of the French Estates General declared itself the National Assembly.
1791	27 August	Prussia and the Holy Roman Empire issued the Declaration of Pillnitz, promising to join a coalition to restore Louis XVI of France to the French throne.
5 December	Mozart died.
1792	20 April	French Revolutionary Wars: France declared war on Austria.
25 July	Charles William Ferdinand, Duke of Brunswick-Wolfenbüttel, commander of the allied armies of Prussia and Austria, issued the Brunswick Manifesto, which threatened reprisals against French civilians in the event that the French king Louis XVI or his family were harmed.
1796	20 May	Rhine Campaign of 1796: Austria declared that its truce with French forces in the area of the Rhine was over effective 31 May.
16 November	Frederick William III of Prussia became king of Prussia.
1799	9 November	Coup of 18 Brumaire: Three of the five members of the French Directory were persuaded to resign, the other two arrested.
19th century
Year	Date	Event
1802	25 March	French Revolutionary Wars: France and the United Kingdom signed the Treaty of Amiens, ending the war.
1803	27 April	Francis II, emperor of the Holy Roman Empire, ratified the Reichsdeputationshauptschluss, consolidating the states of the Empire especially through the secularization of ecclesiastical lands and abolishment of free imperial cities.
18 May	Napoleonic Wars: The Great Britain declared war on France.
5 July	The Convention of Artlenburg, dissolved Hanover and incorporating its territory into France.
1804	12 February	Kant died.
Schiller published William Tell.
1805	9 May	Schiller died.
Napoleonic Wars: Austria joined Britain, Sweden and Russia in the War of the Third Coalition against France.
1806	12 July	Sixteen German states established the Confederation of the Rhine, a confederation and protectorate of France.
6 August	Dissolution of the Holy Roman Empire: Francis II, Holy Roman Emperor, emperor of the Holy Roman Empire, abdicated his title and released his subjects from their obligations to the empire.
Napoleonic Wars: Prussia declared war on France.
14 October	Battle of Jena-Auerstedt: French forces dealt a decisive defeat to a numerically superior Prussian army at Jena and Auerstedt.
1807		The Prussian minister Heinrich Friedrich Karl vom und zum Stein published the Nassauer Denkschrift, laying out his vision for the Prussian reforms.[13]
9 July	France and Prussia signed the second of the Treaties of Tilsit, in which the latter ceded half of its territory to Russia and French client states.[14]
1808		Johann Gottlieb Fichte published his Addresses to the German Nation, arguing for German nationalism and unity.[15]
1810		Robert Schumann was born.
1812	The Brothers Grimm published their first collection of fairy tales.
30 December	The Prussian Generalfeldmarschall Ludwig Yorck von Wartenburg signed the Convention of Tauroggen, establishing an armistice with Russia in contravention of the Treaty of Paris.
1813	22 May	Richard Wagner was born.
19 October	Battle of Leipzig: The French army was encircled and forced to retreat from Leipzig in a battle in which some ninety thousand French and allied troops were killed or injured.
1814	30 May	War of the Sixth Coalition: France signed the Treaty of Paris, under which it returned to its 1792 borders and the House of Bourbon was restored to the French throne, ending the war.
1815	1 April	Otto von Bismarck was born.
9 June	Congress of Vienna: A conference of twenty-three ambassadors signed a treaty reordering Europe's national boundaries and establishing freedom of navigation on the Rhine and the Danube. France was greatly expanded and a German Confederation of thirty-four states was established.
18 June	Battle of Waterloo: The restored French emperor Napoleon was dealt a decisive defeat by the United Kingdom and its allies at Waterloo.
31 October	Karl Weierstrass was born.
1816	5 May	The constitution of the Grand Duchy of Saxe-Weimar-Eisenach was promulgated.
1817	18 October	Wartburg Festival: A protest of liberal students took place at Wartburg.
1818	5 May	Karl Marx was born.
26 May	The Bavarian king Maximilian I Joseph of Bavaria issued a constitution which established a bicameral legislature, the Landtag of Bavaria, and guaranteed freedom of religion.
22 August	The legislature of the Grand Duchy of Baden held its first meeting.
1819	18 March	The conservative writer August von Kotzebue was fatally stabbed by a liberal theology student, Karl Ludwig Sand.
20 September	Representatives of the states of the German Confederation issued the Carlsbad Decrees, under which each resolved to become involved in instruction and hiring at universities, require prior restraint on all serial publications, and dissolve student organizations such as the liberal Burschenschaften.
1826	17 September	Bernhard Riemann was born.
1827	26 March	Beethoven died.
1828	19 November	Schubert died.
1830	7 September	Charles II, Duke of Brunswick was forced by an angry mob to flee the capital Braunschweig.
1831	14 November	Hegel died.
1832	22 March	Goethe died.
15 April	Wilhelm Busch was born.
27 May	Hambach Festival: A rally began at Hambach Castle where participants demonstrated for the liberalization and unification of the German states.
1833	7 May	Johannes Brahms was born.
1834	1 January	The Zollverein came into existence, merging the Bavaria–Württemberg Customs Union, the Prussia–Hesse-Darmstadt Customs Union and the Thuringian Customs and Commerce Union into a single customs union.
1837		The Göttingen Seven published a document opposing the decision of Ernest Augustus, King of Hanover, to abrogate his country's 1833 constitution.
1839		Belgium, the Netherlands, the United Kingdom, Austria, France, Russia and the German Confederation signed the Treaty of London, recognizing Belgium's independence and guaranteeing its neutrality.
1840	7 June	Frederick William died.
28 June	The educator Friedrich Fröbel coined the term kindergarten.
1841		The economist Friedrich List published his National System of Political Economy.
1844	15 October	Friedrich Nietzsche was born.
25 November	Karl Benz was born
1848	27 February	German revolutions of 1848–49: An assembly in Mannheim adopted a resolution demanding a bill of rights.
24 March	First Schleswig War: Ethnic German rebels loyal to the provisional government in the Danish duchies of Schleswig and Holstein captured the government fortress at Rendsburg.
1 May	German federal election, 1848: Elections were held in the thirty-nine states of the German Confederation to a national constituent assembly, the Frankfurt Parliament.
1849	18 June	German revolutions of 1848–49: The chamber of the Frankfurt Parliament, since reduced to a rump parliament and moved to Stuttgart, was occupied by the Württemberg army. A repression began which would force the liberal Forty-Eighters into exile.
1850	30 May	The Prussian three-class franchise, according to which all males over the age of 24 were allowed to vote for their representatives in the lower house of the Prussian parliament, with votes weighted by amount of taxes paid, was introduced.
29 November	Prussia and Austria signed the Punctuation of Olmütz, under which the former agreed to the dissolution of the Prussian-led Erfurt Union and the revival of the German Confederation under Austrian leadership.
1852	8 May	First Schleswig War: Austria, France, Prussia, Russia, Sweden, Denmark and the United Kingdom signed the London Protocol, guaranteeing the nominal independence of Schleswig and Holstein in personal union with Denmark and ending the war.
1855	23 February	Gauss died.
1856	August	Neanderthal remains were discovered in Neandertal.
1858	23 April	Max Planck was born.
1859		The reformist Albrecht von Roon was appointed Prussian minister of war.
1863	23 May	The General German Workers' Association was formed.
1864	1 February	Second Schleswig War: Prussia invaded Schleswig.
30 October	Second Schleswig War: Denmark, Austria and Prussia signed the Treaty of Vienna, placing the duchies of Schleswig and Holstein under Prussian and Austrian administration, respectively, and ending the war.
1866	14 June	Austro-Prussian War: Prussia declared war on Austria.
3 July	Battle of Königgrätz: Prussian forces broke an Austrian line and dealt them a decisive defeat at modern Hradec Králové.
20 July	Riemann died.
18 August	Prussia and fifteen smaller northern German states signed the North German Confederation Treaty, transferring their armed forces to the North German Confederation under the command of the Prussian king William I, German Emperor.
23 August	Austro-Prussian War: Prussia and Austria signed the Peace of Prague, in which the latter agreed to some small territorial concessions and the dissolution of the German Confederation, ending the war.
1870	10 March	Deutsche Bank was established.
16 July	Franco-Prussian War: France declared war on Prussia.
10 December	The Reichstag of the North German Confederation renamed the North German Confederation the German Empire.
1871	18 January	William was crowned emperor of the German Empire in the Hall of Mirrors at Versailles.
21 March	Minister President Otto von Bismarck of Prussia was appointed Chancellor of the German Empire.[16]
1872	11 March	Kulturkampf: The School Supervision Act was passed, transferring all religious schools to state control.[17]
1873	22 October	Germany joined the League of the Three Emperors, a conservative alliance with Russia and Austria-Hungary aimed at preserving those nations' interests in Eastern Europe.
Roon resigned from the Prussian Ministry of War.
1875	6 June	Thomas Mann was born.
1878	13 July	Congress of Berlin: The United Kingdom, Austria-Hungary, France, the German Empire, Italy, Russia and the Ottoman Empire signed the Treaty of Berlin (1878), granting independence to the former Ottoman territories of Romania, Serbia and Montenegro and autonomy to a federal Bulgaria.
1879	7 October	Germany and Austria-Hungary joined a mutual defense treaty, the Dual Alliance.
1880	July	Kulturkampf: The First Mitigation Law was passed, resuming government payments to Prussian dioceses.
16 December	First Boer War: Boer rebels laid siege to a British fort at Potchefstroom.
1882	20 May	Italy joined the Triple Alliance with Germany and Austria-Hungary.[18]
1883	13 February	Wagner died.
14 March	Marx died.
1884	15 November	Berlin Conference: A conference was convened in Berlin to formalize the practice of territorial claims in Africa by the participating powers Austria-Hungary, Belgium, Denmark, France, the United Kingdom, Italy, the Netherlands, Portugal, Spain, Sweden-Norway, the Ottoman Empire and the United States.
1886		Automobiles with gasoline-powered internal combustion engines were produced independently by Karl Benz and Gottlieb Daimler.
1887	18 June	Germany and Russia signed the secret Reinsurance Treaty, in which each promised benevolent neutrality in the event the other should go to war.
1889	20 April	Adolf Hitler was born.
1890	20 March	Bismarck was dismissed as Chancellor.[16]
1 July	Germany and the United Kingdom signed the Heligoland–Zanzibar Treaty, under which Germany renounced its claims over Zanzibar in exchange for the strategic island of Heligoland.[19]
1891		The Pan-German League was established.
1892		Rudolf Diesel invented the Diesel engine.
1896	3 January	The German emperor Wilhelm II, German Emperor sent the Kruger telegram to president Paul Kruger of the South African Republic, congratulating him on the successful repulsion of the Jameson Raid.
1897	19 February	Weierstrass died.
3 April	Brahms died.
1898	30 July	Bismarck died.
1899	11 October	Second Boer War: The South African Republic and the Orange Free State declared war on the United Kingdom.
1900	25 August	Nietzsche died.
20th century
Year	Date	Event
1905	31 March	First Moroccan Crisis: Wilhelm met with representatives of the Moroccan sultan Abdelaziz of Morocco in Tangier in support of Moroccan sovereignty.
Field marshal Alfred von Schlieffen, chief of the German General Staff, developed the Schlieffen Plan, a plan for the quick invasion and conquest of France through Belgium and the Netherlands in the event of a two-front war.
1906	7 April	Algeciras Conference: Germany, Austria-Hungary, the United Kingdom, France, Russia, Spain, the United States, Italy, Morocco, the Netherlands, Sweden, Portugal and Belgium signed the final act of the conference, which limited Moroccan spending and placed French and Spanish officers in charge of its police.
1908	9 January	Poet Wilhelm Busch died.
1911	1 July	Agadir Crisis: The German gunboat SMS Panther arrived at the Moroccan port of Agadir.
1913	6 November	Saverne Affair: Two local Saverne papers reported on offensive comments made by a local Prussian military officer.
1914		Albert Einstein moved to Berlin.
28 July	World War I: Austria-Hungary declared war on Serbia.
4 August	World War I: The United Kingdom declared war on Germany.
Blockade of Germany: The United Kingdom established a blockade of war materiel and foodstuffs bound for Germany.
30 August	Battle of Tannenberg: The German 8th Army decisively defeated a Russian force near Olsztyn, practically destroying the Russian 2nd Army.
9 September	First Battle of the Marne: French forces met the invading 1st and 2nd Armies of the German Empire at the Marne.
1915	22 April	Second Battle of Ypres: The German army released chlorine gas against the French line at Ypres.
1916	31 May	Battle of Jutland: The British Grand Fleet and the German High Seas Fleet met in battle in the North Sea, at a cost of some ten thousand lives and several ships sunk.
4 June	Brusilov Offensive: The Russian Empire launched an offensive across the Eastern Front in the Austrian Kingdom of Galicia and Lodomeria which would cost some half million Russian casualties and over a million German and Austrian casualties.
1 July	Battle of the Somme: A British force drove the German 2nd Army behind its first line of defense at a cost of some sixty thousand casualties.
24 October	Battle of Verdun: The French Second Army consolidated control over Fort Douaumont in Douaumont, ending major operations in a battle which cost as many as one million French and German casualties.
The Turnip Winter begins—a period of famine in which the German people were driven to subsist on turnips.
1917	1 February	The German navy introduced unrestricted submarine warfare, in which submarines sought to destroy surface ships without warning.
The Turnip Winter ended.
1918	21 March	German spring offensive: German forces attacked the British Fifth Army and broke their line in northern France.
8 August	Hundred Days Offensive: An allied force of primarily French, British and American troops drove back the German line at Amiens.
9 November	German Revolution of 1918–19: Wilhelm abdicated his titles as German Emperor and king of Prussia.
10 November	German Revolution of 1918–19: The Council of the People's Deputies, a body elected from the workers' councils of Berlin, introduced sweeping liberal reforms including the elimination of the Prussian three-class franchise and women's suffrage.
11 November	World War I: A German delegation signed the Armistice of 11 November 1918, promising an immediate cessation of hostilities, significant territorial concessions, and the surrender of Germany's war materiel.
1919	15 January	Spartacist uprising: The Freikorps crushed a Berlin uprising by the Marxist Spartacus League, killing some hundred and fifty civilians and executing their leaders Karl Liebknecht and Rosa Luxemburg.
11 February	German presidential election, 1919: Friedrich Ebert of the Social Democratic Party of Germany (SPD) was elected president by the Weimar National Assembly, with seventy-three percent of the vote.
6 April	Ernst Toller declared the establishment of a Bavarian Council Republic in Bavaria.
28 June	Paris Peace Conference, 1919: Representatives of some thirty world powers signed the Treaty of Versailles, under which Germany was forced to disarm, give up its colonies, make substantial territorial concessions, and pay reparations to the Allies.
11 August	The Weimar Constitution came into force. The Weimar Republic succeeded the German Empire.
1920	13 March	Kapp Putsch: The Freikorps Marinebrigade Ehrhardt occupied Berlin. Wolfgang Kapp of the national conservative German National People's Party (DNVP) declared himself chancellor.
Ruhr uprising: The Communist Party of Germany, the Communist Workers' Party of Germany, the Independent Social Democratic Party of Germany and the Free Workers' Union of Germany together established the Ruhr Red Army, which expelled the Freikorps from the valley of the Ruhr.
1921	June	Hyperinflation in the Weimar Republic: Inflation of the Papiermark (Mark) began in response to the first reparations payment to the Allies under the terms of the Treaty of Versailles.
1922	16 April	Germany and Russia signed the Treaty of Rapallo, in which each renounced all territorial and financial claims against the other and pledged to normalize relations.
1923	11 January	Occupation of the Ruhr: France invaded the valley of the Ruhr.
13 August	Gustav Stresemann of the national liberal German People's Party was appointed chancellor and minister for foreign affairs.
8 November	Beer Hall Putsch: Nazi Party chairman Adolf Hitler led some six hundred Sturmabteilung (SA) to the Bürgerbräukeller in Munich, where they held Bavarian state officials Gustav Ritter von Kahr, Hans Ritter von Seisser and Otto von Lossow at gunpoint to demand they support a Nazi coup.
1924	August	Germany and the Triple Entente agreed to the Dawes Plan negotiated by head of the United States Bureau of the Budget chief Charles G. Dawes, under which the French and Belgian occupation of the Ruhr valley was ended and the reparation payment schedule restructured.
1925	16 October	The last of the Locarno Treaties, under which France, Belgium and Germany settled their borders and pledged not to attack each other, was signed.
1926	8 September	Germany joined the League of Nations.
1929	31 August	The Allies accepted the Young Plan, which reduced Germany's war reparations and allowed it to defer a greater portion, which would accrue interest due to a consortium of American banks.
3 October	Stresemann died.
29 October	Wall Street Crash of 1929: The Dow Jones Industrial Average dropped twelve percent in a trading session of record volume.
1930	14 September	German federal election, 1930: The SPD retained a plurality of seats in the Reichstag. The Nazi Party gained ninety-five seats.
1933	30 January	Hitler was appointed chancellor at the head of a Nazi-DNVP coalition.
The process of Gleichschaltung, in which the government dismantled non-Nazi parties and societies, began.
27 February	Reichstag fire: The Reichstag building was burned. The Dutch council communist Marinus van der Lubbe was caught at the scene and confessed.
28 February	President Paul von Hindenburg issued the Reichstag Fire Decree, suspending most civil liberties.
24 March	The Enabling Act of 1933, which granted the cabinet the power to make laws, was passed and signed in the presence of armed members of the SA and Schutzstaffel (SS).
20 July	Vice-chancellor Franz von Papen of Germany and cardinal secretary of state Pope Pius XII of the Holy See signed the Reichskonkordat, which required bishops to swear loyalty to the president of Germany.
1934	30 June	Night of the Long Knives: SS paramilitaries killed at least eighty-five potential threats to Hitler's power, including SA head Ernst Röhm and Gregor Strasser, head of the left wing of the Nazi Party.
1 August	Hitler issued a law merging the powers of the presidency into the office of the chancellor.
2 August	Hindenburg died from lung cancer.
1935	16 March	German re-armament: Hitler announced that Germany would rebuild its military, in violation of the Treaty of Versailles.
1936	7 March	Remilitarisation of the Rhineland: German troops entered the Rhineland in violation of the Treaty of Versailles.
1936 Summer Olympics: Germany won the greatest number of gold, silver and bronze medals at the Olympics, held in Berlin. Black American Jesse Owens won four gold medals, the highest individual total.
1938	12 March	Anschluss: German troops entered Austria.
9 November	Kristallnacht: A pogrom took place in which SA paramilitaries and German civilians destroyed Jewish businesses and at least ninety-one were killed.
1939	23 August	The Molotov–Ribbentrop Pact was signed, promising mutual non-aggression between Germany and the Soviet Union and agreeing to a division of much of Eastern Europe between those two countries.
1 September	Invasion of Poland: Germany invaded Poland.
1941		Konrad Zuse built the Z3.
1942	20 January	Wannsee Conference: A government conference was held to discuss the implementation of the Final Solution, the extermination of European Jewry.
1945	30 April	Death of Adolf Hitler: Hitler committed suicide by gunshot in the Führerbunker in Berlin.
26 June	The Christian Democratic Union of Germany (CDU) was founded.
1 August	Potsdam Conference: British prime minister Clement Attlee, president Harry S. Truman of the United States and Joseph Stalin, the general secretary of the Soviet Communist Party, issued the Potsdam Agreement at Cecilienhof in Potsdam. The parties agreed that Germany would be returned to its 1937 borders with some additional cessions to the Soviet Union and ratified its division into British, French, American and Soviet occupation zones.
1946	29 March	The first of the Allied plans for German industry after World War II, which called for the reduction of German industrial capacity, was issued by the Allied Control Council.
6 September	United States secretary of state James F. Byrnes read the speech Restatement of Policy on Germany, clarifying his nation's desire for economic recovery in Germany and guaranteeing its borders.
1947	4 October	Planck died.
1948	20 June	Ludwig Erhard, the appointed economic director of the Bizone, introduced the Deutsche Mark.
24 June	Berlin Blockade: The Soviet Union blocked Western Bloc access to West Berlin by road and rail.
25 June	Berlin Blockade: United States cargo planes began shipping food and medical supplies to West Berlin.
12 December	The Free Democratic Party (FDP) was established.
1949	12 May	Berlin Blockade: The Soviet Union lifted the blockade.[20]
23 May	West Germany was founded.
14 August	West German federal election, 1949: The CDU and Christian Social Union in Bavaria (CSU) won a narrow plurality of seats in the Bundestag.
15 September	Konrad Adenauer of the CDU became chancellor of West Germany.
7 October	East Germany was founded.
1950		Wirtschaftswunder: The Times first used the term Wirtschaftswunder to refer to the rapid postwar economic growth of West Germany and Austria.
1951	18 April	The Inner Six European nations including West Germany signed the Treaty of Paris establishing the European Coal and Steel Community, a single market in coal and steel governed by supranational institutions.
1952	26 May	East Germany strengthened its border protection regime along the Inner German border.
The General Treaty, which granted West Germany the "authority of a sovereign state", was signed by West Germany, France, the United States and the United Kingdom.
1953	16 June	Uprising of 1953 in East Germany: In response to a 10 percent increase in work quotas, between 60 and 80 construction workers went on strike in East Berlin. Their numbers quickly swelled and a general strike and protests were called for the next day.
17 June	Uprising of 1953 in East Germany: 100,000 protestors gathered at dawn, demanding the reinstatement of old work quotas and, later, the resignation of the East German government. At noon German police trapped many of the demonstrators in an open square; Soviet tanks fired on the crowd, killing hundreds and ending the protest.
1954	4 July	1954 FIFA World Cup Final: West Germany defeated the heavily favored Hungarian national team in the final match of the FIFA World Cup in Bern.
1955	9 May	West Germany joined the North Atlantic Treaty Organization (NATO), a collective defense organization.
14 May	Albania, Bulgaria, Czechoslovakia, East Germany, Hungary, Poland, Romania and the Soviet Union established the Warsaw Pact, a collective defense organization.
12 August	Mann died.
1961	13 August	Construction began on the Berlin Wall between East and West Berlin.
1963	16 October	Erhard became chancellor of West Germany.
1964	November	The National Democratic Party of Germany (NPD) was established.
1966	1 December	Erhard resigned.
Kurt Georg Kiesinger of the CDU was elected Chancellor of West Germany in coalition with the SPD.
1967	2 June	The unarmed student Benno Ohnesorg, a member of the German student movement, was shot and killed by Karl-Heinz Kurras, a Berlin Police inspector and East German spy, while protesting the state visit of shah Mohammad Reza Pahlavi of Iran.
1968	30 May	The German Emergency Acts were passed, amending the Basic Law for the Federal Republic of Germany to allow for the restriction of certain freedoms in the event of an emergency, and marking a major political defeat for the German student movement.
1969	21 October	Willy Brandt of the SPD was elected chancellor of West Germany.
1970	5 June	The Marxist–Leninist terrorist group the Red Army Faction (RAF) was founded.
19 June	The voting age for participation in West German federal elections was lowered from twenty-one to eighteen.[21]
12 August	West Germany and the Soviet Union signed the Treaty of Moscow, in which the former recognized East Germany and renounced its claims on historical German territory east of the Oder–Neisse line.
7 December	West Germany and Poland signed the Treaty of Warsaw, in which both parties pledged to remain at peace and the former again affirmed its recognition of the border at the Oder–Neisse line.
1971	3 September	France, the United Kingdom, the United States and the Soviet Union signed the Four Power Agreement on Berlin, in which all parties pledged peace and the latter pledged to continue to allow trade and communication between West Berlin and West Germany.
1972	26 August	1972 Summer Olympics: The Olympic games opened in Munich, in West Germany.
5 September	Munich massacre: Eight members of the Black September Organization snuck into the Olympic Village in Munich and took nine members of the Israeli team hostage.
21 December	East and West Germany signed the Basic Treaty, in which each recognized the other's sovereignty.
1973	18 September	East and West Germany were admitted to the United Nations (UN).
1974	16 May	Helmut Schmidt of the SPD was elected chancellor of West Germany.
7 July	1974 FIFA World Cup Final: West Germany beat the Netherlands national team in the final match of the FIFA World Cup in Munich, in West Germany.
1982		Germany wins the Eurovision Song Contest 1982, marking their first win by Nicole with 'Ein Bißchen Frieden'
1 October	Helmut Kohl of the CDU became chancellor of West Germany.
1987	September	Erich Honecker, the general secretary of the ruling party of East Germany, the Socialist Unity Party of Germany, paid a state visit to West Germany.
1989	4 September	Monday demonstrations in East Germany: A peaceful demonstration began in Leipzig, in East Germany, which called for democracy and the right of citizens to travel abroad.
9 November	The checkpoints on the Berlin Wall were opened.
1990	8 July	1990 FIFA World Cup Final: West Germany beat the Argentine national team in the final match of the FIFA World Cup in Rome.
12 September	The Treaty on the Final Settlement with Respect to Germany was signed by East and West Germany, the United States, the United Kingdom, France and the Soviet Union. The latter four renounced all rights they held in Germany.
3 October	German reunification: Five East German states acceded to West Germany. Berlin became the capital of Germany.
1992	7 February	The Maastricht Treaty establishing the European Union (EU) was signed by twelve European countries including Germany.
1993	14 May	Alliance '90/The Greens was established from the merger of Alliance 90 and the Green Party.
1994		The Federal Constitutional Court held that the Bundeswehr could take part in UN peacekeeping operations outside NATO territory.
1998	20 April
27 October	Gerhard Schröder of the SPD became chancellor at the head of a coalition with Alliance '90/The Greens.
1999	24 March	NATO bombing of Yugoslavia: NATO forces began bombing the Federal Republic of Yugoslavia in support of the Kosovo Liberation Army.
2000	1 June	Expo 2000: A world's fair was held in Hanover.
21st century
Year	Date	Event
2002	1 January	Physical Euro currency was introduced. The Deutsche Mark lost its status as legal tender in Germany.
2005	19 April	Pope Benedict XVI was elected pope.
22 November	Angela Merkel of the CDU became chancellor in coalition with the CSU and SPD.
2006		2006 FIFA World Cup: The 2006 FIFA World Cup was held in Germany.
2009	27 September	German federal election, 2009: Elections were held to the Bundestag. The SPD lost seventy-six seats; the CDU-CSU coalition and the liberal Free Democratic Party of Germany (FDP) gained.[22]
2010	23 April	European debt crisis: Greece requested a loan from the EU and the International Monetary Fund.
29 May	Germany wins the Eurovision Song Contest 2010, with Lena and 'Satellite'. This was their second win.
2012	18 March	Joachim Gauck was elected Federal President.
2013	22 September	German federal election, 2013: Elections were held to the Bundestag. The FDP failed to meet the electoral threshold. The CDU-CSU coalition and the SPD both gained seats.
2014	17 March	The EU instituted travel bans and asset freezes against individuals connected with the Russian invasion of Crimea.
13 July	2014 FIFA World Cup Final: Germany defeated the Argentine national team in the final match of the FIFA World Cup in extra time in Rio de Janeiro.
2015		In European migrant crisis migrants number in Germany increase up to 1.5 million in 2015.
2016	9 February	Bad Aibling rail accident
19 December	2016 Berlin terror attack on a Christmas market
2017	19 March	Frank-Walter Steinmeier became Federal President.
30 June	Same-sex marriage was legalized by German parliament, effective 1 October.[23]
24 September	German federal election, 2017: Elections were held to the Bundestag. The ruling coalition of CDU/CSU and SPD took significant losses, with AfD, entering parliament for the first time, the main winner. FDP re-entered parliament, bringing the overall number of political parties in the Bundestag up to six.
19 November	After an initial refusal by the SPD to continue the previous governing coalition, the attempt by CDU/CSU, Alliance 90/The Greens and FDP to form a Jamaica coalition failed with the withdrawal by the FDP around Christian Lindner.[24]
2018	14 March	Angela Merkel was elected to her fourth term as chancellor (364/688 votes in the Bundestag), forming the Fourth Merkel cabinet. Olaf Scholz (SPD) became Vice Chancellor.
7 April	2018 Münster attack: 3 civilians and the perpetrator were killed.
7 December	Annegret Kramp-Karrenbauer becomes the new CDU chairwoman. Angela Merkel did not candidate again after 18 years at the party leadership.
2019		British troops in Germany that stayed there since World War II are expected to leave.
2022		Germany will remove all of their nuclear power plants.
2028		The Fehmarn Belt Fixed Link connecting Denmark and Germany would be fully constructed.
2040		Trans-European Transport Networks is expected to finish construction, connecting southern Italy and Germany.`
.replace(/Year\s+Date\s+Event/g,"")
.replace(/\dth century/g,"")
.replace(/\\[\d\\]/g,"")
.replace(/\"/g,"'")
.replace(/\"(\d+)\s+\"/g,`"$1"`)
.replace( /(\d+{3-4})\s*(\d*\-*\d*)\s*(January|February|March|April|May|June|July|August|September|October|November|December)*\s*(.*)\./g, '"$1 $2 $3":"$4",')


console.log(log1)

const events = {}


  var keys = Object.keys(events);

  var values = []
  var finalArr = []

  Object.entries(events).forEach(([key, value]) => {values.push(value.event)})
  for(var i = 0; i < keys.length;i++){
    finalArr.push( `"${keys[i]}":"${values[i]}"` );

  }
  var final = finalArr.join(",")


  return (
    <div>
    <h4 className="h4-details">Learn More</h4>
    <div className="Row">
      <div className="Column" style={{flex:"1 1",justifyContent:"center",alignItems:"center",marginTop:"1rem"}}>
        <div  style={{flex:"4 4"}}><img  style={{maxHeight:"20rem", width:"auto"}} src={selectedAuthor.authorWikiImage}></img></div>
        <h5  style={{flex:"1 1"}} className="h5-details">{selectedAuthor.authorWikiTitle}</h5>
        <h6  style={{flex:"1 1"}} className="subtitle1-details">{`${getYear(selectedAuthor.authorBirthDate)} - ${getYear(selectedAuthor.authorDeathDate)}`}</h6>
      </div>


      <div style={{flex:"1 1"}}>


      </div>

    </div>
    </div>

  )
}

export default AuthorInit
