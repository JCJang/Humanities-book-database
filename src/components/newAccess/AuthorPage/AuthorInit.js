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


const log2 = `450		First Slavic settlements (to 500)
10th century
Year	Date	Event
910		Early stage of the Piast (Giecz-Gniezno area tribe) expansion (to 930)
965		Merchant Abraham ben Jacob mentions the city "Karako" (Currently Kraków)
966	April 14	Baptism of Poland
970		Denarius becomes the currency of Poland
972	24 July	Mieszko I defeats Odo I at the Battle of Cedynia
989		Lesser Poland is conquered
990		After a victory against Boleslaus II, Silesia is annexed
992	May 25	Death of Mieszko I
997		St. Adalbert baptises the citizens of Gyddannyzc (currently Gdańsk)
1000	March	Congress of Gniezno
11th century
Year	Date	Event
1003		Bohemia and Moravia are annexed by Poland
1004		First war with Henry II starts
1007		Second war with Henry II starts
1015		Third war with Henry II starts
1018	January 30	Signing of the Peace of Bautzen (Budziszyn) with Henry II
Bolesław I's intervention in the Kievan succession crisis
1025	April 18	Coronation of Bolesław I Chrobry
June 17	Death of Bolesław I Chrobry the Brave
December 25	Coronation of Mieszko II Lambert
1031		Bezprym organises a coup
Mieszko II flees
Ukrainian prince Yaroslav the Wise conquers Cherven Cities, while the Holy Roman Empire regains Lusatia
1032		Mieszko II Lambert returns to the country, duke Bezprym dies
1034	May 10	Death of Mieszko II Lambert
1034–39		Pagan uprisings against Christianization
1058	November 28	Death of Casimir I the Restorer
1076	December 26	Coronation of Bolesław II the Bold
12th century
Year	Date	Event
1102	June 4	Death of Władysław I Herman
1138	October 28	Death of Bolesław III Wrymouth; birth of Casimir II the Just
1173	January 5	Death of Bolesław IV the Curly
1182		The first Sejm
1194	May 5	Death of Casimir II
13th century
Year	Date	Event
1202	March 13	Death of Mieszko III the Old, High Duke of Poland
1211	May 16	Death of Mieszko IV Tanglefoot
1226	March 26	Issuance of Golden Bull of Rimini
1227	November 24	Assassination of Leszek I the White
1231	November 3	Death of Władysław III Spindleshanks
1238	March 19	Death of Henry I the Bearded
1241		First Mongol invasion of Poland
April 9	Death of Henry II the Pious
1247	August 31	Death of Konrad I of Masovia
1264	September 8	Issuance of Statute of Kalisz
1279	December 7	Death of Bolesław V the Chaste
1288	September 30	Death of Leszek II the Black
Władysław I Łokietek (the Elbow-high) inherits the lands of Poland
1290	June 23	Death of Henryk IV Probus
1295	June 26	Coronation of Przemysł II
Coat of arms of Poland adopted by the King
1296	February 8	Assassination of Przemysł II
1300	August	Coronation of Wenceslaus II
14th century
Year	Date	Event
1305	June 21	Death of Wenceslaus II
1306	August 4	Assassination of Wenceslaus III
1308		Teutonic takeover of Danzig
1311		Rebellion of wójt Albert begins
1312		Rebellion of wójt Albert ends
1320	January 20	Coronation of Władysław I the Elbow-high
1326		Polish–Teutonic War (1326–1332) begins
1332		Polish–Teutonic War concludes
1333	March 2	Death of Władysław I the Elbow-high
April 25	Coronation of Casimir III
1335		Congress of Visegrád
1339		Congress of Visegrád
1343	July 8	Signing of the Treaty of Kalisz
1347		Wiślica Statutes
1364		Founding of Jagiellonian University
1370	November 5	Death of Kazimierz III the Great
November 17	Coronation of Louis of Hungary
1374	September 17	Privilege of Koszyce
1382	September 10	Death of Louis of Hungary
1384	October 16	Coronation of Jadwiga
1385	August 14	Signing of the Union of Krewo
1386	March 4	Coronation of Władysław II Jagiełło
1399	July 17	Death of queen Jadwiga
15th century
Year	Date	Event
1401		Union of Vilnius and Radom
1409		Polish–Lithuanian–Teutonic War begins
1410	July 15	Battle of Grunwald won by Władysław II Jagiełło
1411	February 1	Signing of the First Peace of Thorn (Toruń) concludes the Polish–Lithuanian–Teutonic War
1412	November 8	Signing of the Treaty of Lubowla
1413	October 2	Signing of the Union of Horodło
1414		Hunger War
1422		Gollub War begins
September 27	Signing of the Treaty of Melno concludes the Gollub War
1424		Issuance of Edict of Wieluń
1431		Polish–Teutonic War (1431–1435) begins
1432		Signing of the Union of Grodno
1434	June 1	Death of Władysław II Jagiełło
July 25	Coronation of Władysław III of Varna
1435		Polish–Teutonic War War concludes
1444	November 10	Death of Władysław III of Varna
1447	June 25	Coronation of Kazimierz IV Jagiellon
1454		Thirteen Years' War begins
Statutes of Nieszawa
1466	October 19	Signing of the Second Peace of Thorn (Toruń) concludes the Thirteen Years' War
1473		Almanach cracoviense ad annum 1474 published
1478		War of the Priests begins
1479		War of the Priests ends
1492	June 7	Death of Kazimierz IV Jagiellon
September 23	Coronation of Jan I Olbracht
1496		Statutes of Piotrków
1499		Union of Kraków and Vilnius
16th century
Year	Date	Event
1501	June 17	Death of Jan I Olbracht
October 3	Union of Mielnik
December 12	Coronation of Alexander Jagiellon
1505	May 3	Signing of act of Nihil novi
1506	August 19	Death of Alexander Jagiellon
1507	January 24	Coronation of Sigismund I the Old
1513		Hortulus Animae, polonice published
1515	July	First Congress of Vienna
1519		Polish–Teutonic War begins
1521		Polish–Teutonic War concludes
1525	April 8	Signing of the Treaty of Kraków
April 10	Prussian Homage
1526		Annexation of Duchy of Masovia
1530	February 20	Coronation of Sigismund II Augustus
1537		Chicken War
1543		De revolutionibus orbium coelestium published
1548	April 1	Death of Zygmunt I the Old
1558		Livonian War begins
1561	November 28	Signing of Wilno Pact
1563		Northern Seven Years' War begins
1569	July 1	Signing of the Union of Lublin
1570		Signing of Sandomierz Agreement
December 13	Signing of the Treaty of Stettin concludes the Northern Seven Years' War
1572	July 7	Death of Zygmunt II August
1573	January 28	Signing of the Warsaw Confederation
May 11	Election of Henry of Valois
1574	February 21	Coronation of Henry Valois
June 18	Flight of Henry Valois
1575	December 9	Election of Stephen Báthory
1576	1 May	Coronation of Stephen Batory and Anna Jagiellon
1579		Founding of Vilnius University
1582	January 15	Signing of the Truce of Jam Zapolski concludes Commonwealth participation in the Livonian War
October 15	Adoption of Gregorian calendar
1586	December 12	Death of Stefan Batory
1587	August 19	Election of Sigismund III Vasa
December 27	Coronation of Sigismund III Waza
1591		Kosiński Uprising begins
1593		Kosiński Uprising ends
1594		Nalyvaiko Uprising begins
1596		Nalyvaiko Uprising ends
Transfer of capital from Kraków to Warsaw
Union of Brest concludes
17th century
Year	Date	Event
1605		Polish–Muscovite War (1605–18) begins
1606		Zebrzydowski Rebellion begins
1618		Signing of the Truce of Deulino concludes the Polish–Muscovite War
1620		Polish–Ottoman War (1620–21) begins
1621		Polish–Ottoman War (1620–21) ends
1625		Signing of the Treaty of Kurukove
1629		Signing of the Truce of Altmark
1632		Election Sejm
Smolensk War begins
April 30	Death of Sigismund III Waza
November 8	Election of Władysław IV Vasa
1633		Polish–Ottoman War (1633–34) begins
February 6	Coronation of Władysław IV Vasa
1634		Signing of the Treaty of Polanów concludes the Smolensk War
Polish–Ottoman War ends
1635	September 12	Signing of the Treaty of Sztumska Wieś
1648		Khmelnytsky Uprising begins
May 20	Death of Władysław IV Waza
November 20	Election of John II Casimir Vasa
1649	January 19	Coronation of John II Casimir Vasa
August 17	Signing of the Treaty of Zboriv
1651	June 14	Kostka-Napierski Uprising begins
June 24	Kostka-Napierski Uprising ends
September 28	Signing of the Treaty of Bila Tserkva
1654		Khmelnytskyi Uprising ends
Russo-Polish War begins
1655		Deluge begins
August 18	Signing of the Union of Kėdainiai
December 29	Tyszowce Confederation formed
1657	September 9	Signing of the Treaty of Welawa
November 6	Signing of the Treaty of Bydgoszcz
1658	September 16	Signing of the Treaty of Hadiach
1660	May 3	Signing of the Treaty of Oliva concludes the Deluge
1665		Lubomirski's Rokosz begins
1666		Lubomirski's Rokosz ends
1667	January 30	Signing of the Treaty of Andrusovo concludes the Russo-Polish War
1668	September 16	Abdication of John II Casimir Vasa
1669	June 16	Election of Michał Korybut Wiśniowiecki
September 29	Coronation of Michał Korybut Wiśniowiecki
1672		Polish–Ottoman War (1672–76) begins
October 18	Signing of the Peace of Buczacz
1673	November 10	Death of Michael Korybut Wiśniowiecki
1674	May 19	Election of John III Sobieski
1676	February 2	Coronation of John III Sobieski
October 17	Signing of the Treaty of Żurawno concludes the Polish–Ottoman War
1683	September 12	Battle of Vienna won under command of John III Sobieski
1686		Signing of the Eternal Peace Treaty
1696	June 17	Death of John III Sobieski
1697	June 27	Election of Augustus II the Strong
September 15	Coronation of Augustus II the Strong
1699		Signing of the Treaty of Preobrazhenskoye
January 26	Signing of the Treaty of Karlowitz concludes the Great Turkish War
18th century
Year	Date	Event
1704	February 16	Warsaw Confederation formed
May 20	Sandomierz Confederation formed
July 12	Election of Stanisław Leszczyński
1705	October 4	Coronation of Stanisław Leszczyński
1706	September 24	Signing of the Treaty of Altranstädt
1709	July 8	Restoration of August II the Strong
1715		Tarnogród Confederation begins
1716		Tarnogród Confederation ends
1717	February 1	Silent Sejm
1724	December 7	Tumult of Thorn
1733		War of the Polish Succession begins
February 1	Death of August II the Strong
October 5	Election of August III the Saxon
1734	January 17	Coronation of August III the Saxon
November 5	Dzików Confederation formed
1736		Pacification Sejm
1738	November 18	Treaty of Vienna concludes the War of the Polish Succession
1763	October 5	Death of August III
1764		Convocation Sejm
September 7	Election of Stanisław August Poniatowski
November 25	Coronation of Stanisław August Poniatowski
1767		Repnin Sejm begins
March 20	Słuck Confederation formed
June 23	Radom Confederation formed
1768		Koliyivschyna
Massacre of Uman
February 29	Signing of the Bar Confederation
1772		First Partition of Poland
1773	October 14	Creation of Commission of National Education
1788		Great Sejm begins
1789	December 2	Black Procession
1790	March 29	Signing of Polish–Prussian alliance
1791	April 18	Free Royal Cities Act
May 3	Adoption of Constitution of 3 May
1792		Polish–Russian War
May 14	Signing of Targowica Confederation
May 29	Great Sejm ends
1793		Second Partition of Poland
Grodno Sejm
1794	March 24	Kościuszko Uprising begins
March 24	Kościuszko's proclamation
May 7	Issuance of Proclamation of Połaniec
August 20	Greater Poland Uprising begins
1795		Third Partition of Poland
November 25	Abdication of Stanisław August Poniatowski
19th century
Year	Date	Event
1806	November 3	Greater Poland Uprising begins.
The Town of Łódź became a part of the Napoleonic Duchy of Warsaw.
1807	March 19	Beginning of the Siege of Danzig.
May 24	End the Siege of Danzig.
July 9	The second Treaty of Tilsit was signed.
Białystok was captured by the Russian Empire.
1809	October 14	Signing of the Treaty of Schönbrunn.
1815	June 9	Congress of Vienna concludes.
October 18	Free City of Kraków proclaimed.
November 27	Adoption of Constitution of the Kingdom of Poland.
1812	July 3	The forces of Napoleon invaded Białystok.
1813	January	Siege of Danzig occurred.
1814		Prussia captured Gdańsk.
1815		The Republic of Krakow was established.
1820	January	Kraków Town Hall was demolished excluding the tower.
1824		The Lodka settlement was founded.
1825	December 1	Death of Alexander I of Russia.
1829	24 May	Coronation of Nicholas I of Russia.
1830	November 29	November Uprising begins.
1831		Russian forces occupied Kraków.
1832		Handelsakademie was founded.
1834		Białystok prevented schools from teaching in the Polish language.
1846	February 19	Kraków Uprising begins.
March 4	Kraków Uprising ended.
November 16	Free City of Kraków incorporated into the Austrian Empire.
1848		Greater Poland Uprising.
1850	July 18	Kraków fire of 1850 began.
1863	January 22	January Uprising begins.
1864	March 2	Abolition of serfdom in Congress Poland.
1873		The School of Fine Arts and Academy of Learning became active.
1879		The National Museum of Kraków was founded.
1881		Great Synagogue was constructed in Łódź.
1884		Alexander Nevsky Cathedral was constructed.
1888		Karl Scheibler's Chapel was constructed.
1892		Izrael Poznański factory was constructed.
1898		The Volunteer Fire Department was founded.
20th century
Year	Date	Event
1908	September 26	Bezdany raid near Vilna on a Russian imperial train
1916	November 5	Signing of the Act of 5th November between Germany and Austria
1917	July 9	Oath crisis by the departing Polish Legions led by Józef Piłsudski
1918	March 3	Signing of the Treaty of Brest-Litovsk with the Soviet Russia
November 11	Poland regains independence with the formation of the Second Polish Republic following the Armistice of 11 November 1918
The Second Polish Republic (1918–39)
Year	Date	Event
1918	November 1	Polish–Ukrainian War begins, ends in 1919
November 11	Polish Independence Day, Warsaw is free from German troops of the Ober Ost
December 27	Greater Poland Uprising begins, ends in 1919
1919	January 23–30	Polish–Czechoslovak War erupts following border disagreements
January 26	Legislative election to the Sejm
February 14	Polish–Soviet War begins
February 16	Greater Poland Uprising ends
February 20	Adoption of Small Constitution
April 22	Proclamation to the inhabitants of the former Grand Duchy of Lithuania about Międzymorze
June 28	Treaty of Versailles (Articles 87–93) and Little Treaty ratify Poland as a sovereign state internationally
August 16	First Silesian Uprising begins; Silesian Uprisings continue until 1921
August 22	Sejny Uprising after imperial Germany turned over administration to Lithuanian delegates
1920	February 10	Poland's Wedding to the Sea in Puck
April 21	Signing of Treaty of Warsaw
July 5–16	Spa Conference in Belgium
August 12–25	Miracle of the Vistula during the Bolshevik invasion
August 19	Second Silesian Uprising begins
September 1	Polish–Lithuanian War continues over the Vilnius and Suwałki Regions
October 6	Żeligowski's Mutiny resulting in the creation of the Republic of Central Lithuania
1921	February 19	Signing of the Franco-Polish alliance
March 3	Polish–Romanian alliance signed in Bucharest
March 17	Adoption of March Constitution
March 18	Signing of the Peace of Riga with Lenin concludes the Polish-Soviet War
March 20	Upper Silesia plebiscite rigged
May 2	Third Silesian Uprising begins
1922	November 5–12	Legislative election
December 9	Gabriel Narutowicz becomes President
December 16	Assassination of Gabriel Narutowicz
December 22	Stanisław Wojciechowski becomes President
1923	November 6	Krakow riot
1924	January 11	Władysław Grabski's monetary reform with Bank of Poland acting as an issuing bank
1925	December 1	Signing of the Locarno Treaties
1926	May 12–14	May Coup
June 4	Ignacy Mościcki becomes President
1928	March 4–11	Legislative election
Piłsudski's Nonpartisan Bloc for Cooperation with the Government election campaign
1930	November 16	Legislative election
1932	July 25	Signing of the Soviet–Polish Non-Aggression Pact
1934	January 26	Signing of the German–Polish declaration of non-aggression
1935	April 23	Adoption of Apr Constitution
May 12	Death of Józef Piłsudski
September 15	Legislative election
1938	April 1	Territorial changes of Polish Voivodeships
October	Annexation of Zaolzie
November 6	Legislative election
1939	April 2	Suicide former Prime Minister of Walery Sławek
August 23	Signing of the Molotov–Ribbentrop Pact
August 25	Signing of the Polish–British Common Defence Pact
August 29	Peking Plan begins, Polish destroyers moved to British ports
August 31	Gleiwitz incident, pretext for the invasion
Occupation of Poland (1939–45)
Year	Date	Event
1939	September 1	German Invasion of Poland begins; Bombing of Wieluń
September 2	Massacre in Torzeniec village
September 3	Bloody Sunday in Bydgoszcz
September 8	German Massacre in Ciepielów of Polish POW
September 13	Bombing of Frampol, up to 90% of the town destroyed
September 17	Soviet invasion of Poland
September 18	Orzeł incident, ORP submarine escapes to the United Kingdom
September 18	The Fall of Warsaw
October 1	General Bolesław Wieniawa-Długoszowski elected President
October 6	Poland completely occupied
November 6	Sonderaktion Krakau operation against university professors
1940	March 5	Authorization of Katyń massacre
May 16	Authorization of German AB-Aktion in Poland
1941	June 30 – July 29	Lviv pogroms
July 2	Massacre of Lwów professors
July 10	Jedwabne pogrom
August 17	Signing of the Sikorski–Mayski agreement in London
October 12	Stanisławów Ghetto Bloody Sunday massacre
1942	March 17	Bełżec extermination camp begins secretive Operation Reinhard
May 16	Sobibór extermination camp starts mass gassing operations
July 22	Treblinka extermination camp becomes ready for the Grossaktion Warsaw deportations
1943	March 26	Operation Arsenal, first major operation by the Szare Szeregi
April 19	Warsaw Ghetto Uprising begins
May 16	Warsaw Ghetto Uprising ends
July 4	Death of Polish military leader Władysław Sikorski
July 11	Bloody Sunday, the peak of Massacres of Poles in Volhynia and Eastern Galicia
July 11–12	Zagaje massacre
December 1	Tehran Conference concludes in the Soviet embassy in Tehran
1944	January 29	Koniuchy massacre by Soviet partisans
February 28	Huta Pieniacka massacre by Ukrainian Grenadier Division of the Waffen-SS
June 20	Glinciszki massacre by Lithuanian Auxiliary Police
July 22	Proclamation of the PKWN Manifesto by Soviet-backed Polish Committee of National Liberation
July 25	Operation Most III begins on the German V-2 rocket
August	Wola massacre in the opening phase of the Warsaw Uprising
August 1	Warsaw Uprising begins
October 2	Warsaw Uprising ends
1945	January 26	Przyszowice massacre
February 11	Yalta Conference concludes
March	Pawłokoma massacre
March 17	Poland's Wedding to the Sea in Mrzeżyno
March 18	Poland's Wedding to the Sea in Kołobrzeg
Communist takeover, Polish People's Republic
Year	Date	Event
1945	May 8	End of World War II in Europe
June 18–21	Trial of the Sixteen Polish Underground leaders in Moscow
July 10–25	Augustów roundup of anti-Communist partisans
August 2	Potsdam Conference concludes between the Soviet Union, the United Kingdom, and the United States
August 11	Kraków pogrom with one dead victim
1946	June 30	People's referendum
July 4	Kielce pogrom
1947	January 19	Legislative election rigged, 100,000 ORMO men deployed to intimidate voters
February 19	Adoption of Small Constitution of 1947
April 28	Operation Vistula begins
November 24	Auschwitz trial begins in Kraków
1950	July 6	Signing of the Treaty of Zgorzelec
1951	July 31	Trial of the Generals who served in the anti-Nazi resistance during World War II
1952	July 22	Adoption of Constitution of the People's Republic of Poland
October 26	First Legislative election by the one-party rule
1955	May 14	Signing of the Warsaw Pact
1956	March 12	Death of Bolesław Bierut
June 28	Poznań 1956 protests
October 21	Polish October, return of Władysław Gomułka
1957		Legislative election
1961		Legislative election
1965		Legislative election
Letter of Reconciliation of the Polish Bishops to the German Bishops
1968	March	Political crisis
August 20	End of Prague Spring with the invasion of Czechoslovakia
1970	December 7	Signing of Treaty of Warsaw; Warschauer Kniefall
rowspan ="2" valigin="top" 1973 September, last speech of chile military prasident salvador allende

December 14	1970 protests begin
1978	October 16	Election of Pope John Paul II
1980		Gdańsk Agreement
March 14	LOT Polish Airlines Flight 007
August 17	21 demands of MKS
1981	May 28	Death of Primate Poland Stefan Wyszyński
1981	December 13	Martial law begins
1983		Solidarity leader Lech Wałęsa receives the Nobel Peace Prize.
July 22	Martial law ends
1984		Father Jerzy Popiełuszko murdered by Polish secret police.
1989	April 4	Signing of the Round Table Agreement
April 7	April Novelization
June 4	Parliamentary election
July 19	Lech Walesa becomes President
August 24	Tadeusz Mazowiecki becomes first non-communist prime minister in the Eastern Bloc
December 31	The People's Republic of Poland becomes the Republic of Poland
Democratic Republic of Poland
Year	Date	Event
1990	May 27	Local elections
November 14	Signing of German–Polish Border Treaty
November 25	Presidential election
December 22	Lech Wałęsa becomes President
1991	June 27	Mława riot after Romani youth kills pedestrian in a hit-and-run
July 1	Dissolution of Warsaw Pact
October 27	Parliamentary election
1992	October 17	Adoption of Small Constitution
December 21	Signing of Central European Free Trade Agreement
1993	September 14	Lufthansa Flight 2904
September 19	Parliamentary election
1994	May 2	Poland bus disaster of 1994
June 19	Local elections
1995	November	Presidential election
December 23	Aleksander Kwaśniewski becomes President
1997	April 2	Adoption of Constitution
September 21	Parliamentary election
1998	October 11	Local elections
1999	January 1	16 new voivodeships created in Polish local government reforms
1999	March 12	Accession of Poland to NATO
2000	October 8	Presidential election
21st century
Year	Date	Event
2001	September 23	Parliamentary election
2002		Census
October 27	Local elections
2003	April 16	Signing of the Treaty of Accession
June	European Union membership referendum
2004	1 May	Accession of Poland to the European Union
June 13	European Parliament election
2005	April 2	Death of Pope John Paul II
September 25	Parliamentary election
October	Presidential election
December 23	Lech Kaczyński becomes President
2006	January 28	Katowice Trade Hall roof collapse
November	Local elections
2007	October 21	Parliamentary election
2010	April 10	Polish Air Force Tu-154 crash killing Polish President Lech Kaczyński
2010	July 4	Bronisław Komorowski elected president.
2011	August 5	Suicide of Andrzej Lepper
2011	October 9	Parliamentary election
2012	March 3	A train crash near Szczekociny, Poland, kills 16 people.
2014	April 27	Canonization of Pope John Paul II
2014	May 25	Death of Wojciech Jaruzelski
2015	May	Presidential election
2015	August 6	Andrzej Duda becomes President`
.replace(/\[\d\]/g,"")
.replace(/Year\s+Date\s+Event/g,"")
.replace(/\d+th century/g,"")
.replace(/\"/g,"'")
.replace( /(\d*)\s*(January|February|March|April|May|June|July|August|September|October|November|December)*\s*(\d*)\s*(.*)[\.\n]/g, '"$1 $3 $2":"$4",\n')
.replace(/\"(\d+)\s+\"/g,`"$1"`)
.replace(/\s+/," ")
console.log(log2)



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
