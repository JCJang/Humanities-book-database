import {useState,useEffect} from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const SearchForm = ({allShelves, columnFocus, setColumnFocus, setLanguageSetting, languageSetting, shelfId, setShelfId,selectedShelf,setSelectedShelf, setBookNumber}) => {
  const [shelfQuery, setShelfQuery] =  useState('')
  const [shelfResults, setShelfResults] = useState(false)
  const [shelfTitle, setShelfTitle] = useState('Shelf Title')



  const log2=`1779  February 14 - Battle of Kettle Creek
1779  February 23–25 Siege of Fort Vincennes
1779  May 10–24 - Chesapeake raid
1779  July 3-14 - Tryon's raid
1779  July 5 - Tryon's division lands in East Haven, Connecticut,met with spirited resistance from a band of local militia, take Black Rock Fort
1779  July 7 - Battle of Fairfield Destroy 54 barns, 47 storehouses, burned 83 homes, two churches, and municipal buildings including a schoolhouse, the courthouse and the local jail
1779  July 11 - Battle of Norwalk weakly opposed by about 50 local militia, easily dispersed. The destruction of the village and its commercial infrastructure destroyed
1779  July 16 - Battle of Stony Point
1779  July 22 - Battle of Minisink
1779  July 24 – August 14 - Penobscot Expedition
1779  August 19 - Battle of Paulus Hook
1779  September 16 - October 18 Siege of Savannah
1779  September 21 - Battle of Baton Rouge
1779  September 23 - Battle of Flamborough Head
1779  December - May 1780 Continental Army in fifth winter quarters at Morristown
1780 Surrender of Lord Cornwallis at Yorktown, 1820 painting by John Trumbull
1780 January 15 – Congress establishes the Court of Appeals in Cases of Capture to provide for final adjudication of appeals from state court prize cases involving disposition of ships and cargo allegedly seized from the British.
1780 January 16 - Battle of Cape St. Vincent
1780 January 28 – A stockade known as Fort Nashborough is founded on the banks of the Cumberland River. Two years later the site is renamed Nashville.
1780 February 1 – Some 8,000 British forces under General Henry Clinton arrive in Charleston, South Carolina, from New York.
1780 February 1 – New York cedes to Congress its western claims, including territory west of Lake Ontario. In 1792 New York will sell the Erie Triangle to Pennsylvania
1780 February 3 - Battle of Young's House
1780 March 14 – Bombardment of Fort Charlotte: After a two-week siege, Spanish general, colonial governor of Louisiana, and Viceroy of New Spain Bernardo de Gálvez captures Fort Charlotte, taking the port of Mobile (in present-day Alabama) from the British. Fort Charlotte was the last remaining British frontier post capable of threatening New Orleans in Spanish Louisiana. Its fall drove the British from the western reaches of West Florida and reduced the British military presence in West Florida to its capital, Pensacola.
1780 March 29-May 12 - Siege of Charleston
1780 April 8 – Siege of Charleston: British Army troops under General Henry Clinton and naval forces under Admiral Mariot Arbuthnot besiege Charleston, South Carolina. British ships sail past Fort Moultrie on Sullivan's Island to occupy Charleston Harbor. Washington will order reinforcements to Charleston, but the city falls on May 12 in what is arguably the worst American defeat of the war.
1780 May 6 – Siege of Charleston: Fort Moultrie falls to the British.
1780 April 2 – Siege of Charleston: American General Benjamin Lincoln surrenders Charleston to the British. The British lose 255 men while capturing a large American garrison.
1780 April 14 - Battle of Monck's Corner
1780 May 6 - Battle of Lenud's Ferry
1780 May 25-August 4 - Bird's invasion of Kentucky
1780 May 29 – Battle of Waxhaws: A clash between Continental Army forces under Abraham Buford and a mainly Loyalist force led by Banastre Tarleton occurs near Lancaster, South Carolina in the Waxhaws area (close to present-day Buford). The British destroyed the American forces.
1780 June 7 – Battle of Connecticut Farms
1780 June 10 - Battle of Mobley's Meeting House
1780 June 20 - Battle of Ramsour's Mill
1780 June 23 – Battle of Springfield. With the attempted British invasion of New Jersey stopped at Connecticut Farms and Springfield, major fighting in the North ends.
1780 June 27 – Robert Morris is appointed Superintendent of Finance, a post akin to Prime Minister, by Congress.
1780 July 11 - Expédition Particulière
1780 July 12 - Battle of Williamson's Plantation
1780 July 20–21 - Battle of Bull's Ferry
1780 July 21 - Battle of Colson's Mill
1780 August 1 - Battle of Rocky Mount
1780 August 6 - Battle of Hanging Rock
1780 August 8 - Battle of Piqua
1780 August 16 – Battle of Camden. British General Cornwallis gains a humiliating victory over Gates in South Carolina.
1780 August 18 - Battle of Fishing Creek
1780 August 18 - Battle of Musgrove Mill
1780 August 28 - Battle of Black Mingo
1780 September 21 - Battle of Wahab's Plantation
1780 September 23 – John André captured and the treason of Benedict Arnold is exposed
1780 September 26 – Battle of Charlotte
1780 October 7 – Battle of Kings Mountain
1780 October 16 - Royalton Raid
1780 October 19 - Battle of Klock's Field
1780 November 9 - Battle of Fishdam Ford
1780 November 20 - Battle of Blackstock's Farm
1780 December – Continental Army enters sixth winter with encampments in New York’s Hudson Highlands and Pompton and Morristown, New Jersey
1781 The Future King William IV, the only active member of the British Royal Family to visit the former 13 colonies, takes up residence in the Rose and Crown Tavern on Staten Island.
1781 January 1–29 - Pennsylvania Line Mutiny
1781 January 1–19 - Raid on Richmond
1781 January 17 – Battle of Cowpens
1781 January 20 - Pompton Mutiny
1781 February 24 - Pyle's Massacre
1781 March 1 – Articles of Confederation ratified
1781 March 8 - Skirmish at Waters Creek
1781 March 15 – Battle of Guilford Court House
1781 March 16 - Battle of Cape Henry
1781 April 25 - Battle of Blandford
1781 April 25 - Battle of Hobkirk's Hill
1781 April 27 - Action at Osborne's
1781 May 22-June 6 - Siege of Augusta
1781 May 22-June 19 - Siege of Ninety-Six
1781 June 26 - Battle of Spencer's Ordinary
1781 July 6 - Battle of Green Spring
1781 July 9–24 - Francisco's Fight
1781 September 5 – Battle of the Chesapeake
1781 September 6 – Battle of Groton Heights
1781 September 8 – Battle of Eutaw Springs
1781 October 19 – The British surrender at Yorktown
1781 December 31 – Bank of North America chartered
1781 December – Continental Army returns to Hudson Highlands and Morristown New Jersey for its seventh winter encampment.
1782 February 27 – The British House of Commons votes against further war, informally recognizing American independence.
1782 March 8 - Gnadenhutten massacre
1782 March 22 - Battle of Little Mountain
1782 May 25-June 12 - Crawford expedition
1782 August 15–17 - Siege of Bryan Station
1782 August 19 - Battle of Blue Licks
1782 August 27 – Battle of the Combahee River
1782 September 11–13 – Siege of Fort Henry (1876)
1782 November – Continental Army moves into its eighth and final winter quarters, at the New Windsor Cantonment and in the Hudson Highlands
1782 November 30 – preliminary Articles of Peace are signed by British negotiator Richard Oswald and representatives of the United States of America.
1782 December 14 – British evacuate Charleston, South Carolina
1782 December 27 – Last skirmish of the conflict takes place near Cedar Bridge Tavern in Barnegat Township, New Jersey.
1783 March 10–15 - Newburgh Conspiracy
1783 June 20–24 - Pennsylvania Mutiny of 1783
1783 September 3 – The Treaty of Paris (1783) ends the American Revolutionary War
1783 November 25 – The British evacuate New York, marking the end of British rule, and General George Washington triumphantly returns with the Continental Army.
1783 December 23 – George Washington's resignation as commander-in-chief of the Continental Army
1784 January 14 – The Treaty of Paris is ratified by the Congress.
1784 Jay–Gardoqui Treaty
1784 April 9 – The Treaty of Paris is ratified by the British
1784 May 12 – Ratified treaties are exchanged in Paris between the two nations.
1784 August – "The state of Frankland," later known as Franklin, secedes from North Carolina
1784 November 1 – Robert Morris resigns as Superintendent of Finance and is not replaced.
1785 May - Congress refuses admission of the State of Franklin to the Union
1785 November 28 - Treaty of Hopewell
1786 August 29 – June 1787 - Shays' Rebellion
1786 September 11–14 - Annapolis Convention fails
1787 July 13 - Northwest Ordinance
1787 -Scene at the Signing of the Constitution of the United States, by Howard Chandler Christy (1940)
1787 May 25 - September 17 - Constitutional Convention in Philadelphia
1787 December 7, 12, 18- Delaware, Pennsylvania and New Jersey ratify the Constitution
1788 -North Carolina reasserted it claim to its Overmountain region, at which time Franklin ceases to exist.
1788 - Georgia, Connecticut, Massachusetts, Maryland, South Carolina, New Hampshire, Virginia and New York ratify the Constitution
1788 -United States Constitution ratified (June 21)
1788 November 2 – Cyrus Griffin resigns as "President of the United States in Congress Assembled", and with the exceptions of John Jay and John Knox remaining as Secretaries of Foreign Affairs and War respectively; and Michael Hillegas remaining as Treasurer, the United States of America temporarily ceases to exist.
1788 - The first federal Elections for the House of Representatives begin.
1788  -United States presidential election (December 15, 1788 – January 10, 1789)
1789 March 2 - Philip Pell, only member in attendance, adjourns the Congress of the Confederation sine die
1789 March 4 - Members of the 1st United States Congress begin to take their seats, Federal Hall New York
1789 April 1 - House of Representatives first achieves a quorum; elects its officers
1789 April 6 - Senate first achieves a quorum and elects its officers
1789 April 6 - Joint session of Congress counts the Electoral College ballots, certifies that George Washington has been unanimously elected President of the United States
1789 April 6 - John Adams receives 34 of 69 votes, is elected as Vice president
1789 April 30 - George Washington is inaugurated as the nation's first president at Federal Hall in New York City
1789 July 4 - Hamilton tariff
1789 July - Charles Thomson resigns as secretary of Congress and hands over the Great Seal, bringing an end to the Confederation Congress
1789 September 24 - Judiciary Act of 1789
1789 September 25 - Congress approves twelve articles of amendment to the Constitution, the Bill of Rights
1789 November 21 - North Carolina becomes the 12th state to ratify the Constitution, with a vote of 194–77
1790 – Rhode Island ratifies the Constitution and becomes 13th state
1791 – The Bill of Rights, comprising the first ten amendments to the Constitution, is adopted. First Bank of the United States chartered. Vermont becomes the 14th state (formerly the independent Vermont Republic)
1792 – Kentucky becomes the 15th state (formerly Kentucky County, Virginia). U.S. presidential election, 1792: George Washington reelected president, John Adams reelected vice president.
1793 February 12 – Fugitive Slave Act passed[4]
1793  March 4 – President Washington and Vice President Adams begin second terms
1793 August – November – Yellow fever outbreak in Philadelphia
1793 October 28 – Eli Whitney invents cotton gin
1793 – Chisholm v. Georgia (2 US 419 1793) paves way for passage of 11th Amendment
1794 – Whiskey Rebellion. Battle of Fallen Timbers. Treaty of Greenville
1795 – Jay's Treaty. 11th Amendment "ratified by 12 of the then 15 states". Pinckney's Treaty (also called Treaty of San Lorenzo).
1796 – Tennessee becomes the 16th state[9] (formerly part of North Carolina). Treaty of Tripoli
1796 November 4 – December 7 – U.S. presidential election, 1796: John Adams is elected president, Thomas Jefferson vice president
1797 – John Adams becomes the second President (until 1801);[10] in Philadelphia; Thomas Jefferson becomes Vice President
1798 – Alien and Sedition Acts. the Quasi-War starts. Charles Brockden Brown's novel Wieland published
1798 and 1799 – Virginia and Kentucky Resolutions[12]
1799 – Charles Brockden Brown's novel Edgar Huntly published. Fries's Rebellion. Logan Act. George Washington dies
1800 – Library of Congress founded. Convention of 1800 ends the Quasi-War.
1800 October 31 – December 3 – U.S. presidential election, 1800: Thomas Jefferson and Aaron Burr tie in the Electoral College.
1801 – Thomas Jefferson elected president by the House of Representatives; Aaron Burr elected vice president. President Adams appoints John Marshall Chief Justice
1803 – Marbury v. Madison (5 US 137 1803) allows Supreme Court to invalidate law passed by the United States Congress for first time: the Judiciary Act of 1789. Louisiana Purchase. Ohio, formerly part of Connecticut, becomes the 17th state
1804 – 12th Amendment ratified. New Jersey abolishes slavery. Burr-Hamilton duel (Alexander Hamilton dies). Lewis and Clark set out
1804 November 3 – December 5– U.S. presidential election, 1804: Thomas Jefferson reelected president; George Clinton elected vice president
1805 – President Jefferson begins second term; George Clinton becomes Vice President
1807 – Embargo Act of 1807. Robert Fulton invents steamboat. U.S. slave trade with Africa ends [13]
1808 – U.S. presidential election, 1808: James Madison elected president, George Clinton reelected vice president
1809 – James Madison becomes the fourth President; Vice President Clinton begins second term.
1809 March 1– Non-Intercourse Act
1810 – Fletcher v. Peck (10 US 87 1810) marks first time U.S. Supreme Court invalidates a state legislative act
1811 – First Bank of the United States charter expires
1812 – Vice President Clinton dies. War of 1812, an offshoot of the Napoleonic Wars, begins. Daniel Webster elected to the United States Congress. Louisiana becomes the 18th state.
1812 October 30 – December 2– U.S. presidential election, 1812: James Madison reelected president; Elbridge Gerry elected vice president
1813 – President Madison begins second term; Elbridge Gerry becomes Vice President
1813-1814 - Creek War
1814 – British troops burn Washington, D.C. but are forced back at Baltimore. Vice President Gerry dies. Treaty of Ghent settles War of 1812
1815 – Battle of New Orleans
1816 – Indiana becomes the 19th state. Second Bank of the United States chartered.
1816 November 1 – December 4– U.S. presidential election, 1816: James Monroe elected president, Daniel D. Tompkins vice president
1817 – James Monroe becomes the fifth President; Daniel D. Tompkins, Vice President. Rush-Bagot Treaty. Harvard Law School founded. Mississippi becomes the 20th state
1818 – Cumberland Road opened. Illinois becomes the 21st state. Jackson Purchase in Kentucky
1819 – Panic of 1819. Adams-Onís Treaty, including acquisition of Florida. McCulloch v. Maryland (17 US 316 1819) prohibits state laws from infringing upon federal constitutional authority. Dartmouth College v. Woodward (17 US 518 1819) protects principle of honoring contracts and charters. Alabama becomes the 22nd state in the U.S.
1820 – Massachusetts divided in two with the admission of Maine as a state.
1820 November 1 – December 6– U.S. presidential election, 1820: James Monroe reelected president unopposed, Daniel D. Tompkins reelected vice president.
1821 – President Monroe and Vice President Tompkins begin second terms. Missouri becomes a state. Florida becomes a U.S. territory; the 1819 Adams–Onís Treaty goes into effect
1823 – Monroe Doctrine proclaimed
1824 – Gibbons v. Ogden (22 US 1 1824) affirms federal over state authority in interstate commerce. Gibbons' business partner is Cornelius Vanderbilt. U.S. presidential election, 1824: Presidential results inconclusive. John C. Calhoun elected the vice president.
1825 – John Quincy Adams elected president by the House of Representatives; Adams becomes the sixth President; John C. Calhoun, Vice President. Erie Canal is finally completed
1826 – Former presidents Thomas Jefferson and John Adams die on the same day, which happens to be on the fiftieth anniversary of the approval of the Declaration of independence.
1828 – U.S. presidential election, 1828: Andrew Jackson elected president; John C. Calhoun reelected vice president
1828 December 22 - First Lady-designate Rachel Jackson dies of a heart attack.
1829 – Andrew Jackson becomes the 7th President; Vice President Calhoun begins second term
1830s – Second Great Awakening is the religious revival movement. Oregon Trail which comes into use by settlers migrating to the Pacific Northwest
1830 – Indian Removal Act
1831 – Nat Turner's revolt. The Liberator begins publication in 1831. Cyrus McCormick invents the mechanical reaper. Petticoat affair (also known as the Eaton affair)
1832 – Worcester v. State of Georgia the Supreme Court rules in favor of Cherokees; President Jackson ignores the ruling. Maria Stewart is the first black American woman to give speech in front of a mixed audience. Black Hawk War. Tariff of 1832. Ordinance of Nullification passed by South Carolina. Department of Indian Affairs established
1832 November 2 – December 5 – 1832 United States presidential election: Andrew Jackson reelected president; Martin Van Buren elected vice president. Jackson vetoes the charter renewal of the Second Bank of the United States, bringing to a head the Bank War and ultimately leading to the Panic of 1837. John C. Calhoun resigns as vice president
1833 – The Force Bill expands presidential powers. President Jackson begins second term; Martin Van Buren becomes Vice President
1834 – Slavery debates at Lane Theological Seminary are one of the first major public discussions of the topic
1835 – Mexican President Santa Anna annuls the 1824 constitution, precipitating a civil war which spawns the Texas War for Independence. Alexis de Tocqueville's Democracy in America published. Second Seminole War begins in Florida as members of the Seminole tribe resist relocation
1836 – Mexican President Santa Anna's army defeats Texas rebels at Battle of the Alamo. Battle of Goliad. Santa Anna deposed after losing the Battle of San Jacinto and recognizing Texan independence. Creek War of 1836. Samuel Colt invents the revolver. Original "gag rule" imposed when U.S. House of Representatives bars discussion of antislavery petitions. Specie Circular issued. Arkansas becomes a state. Texas is the Lone Star Republic.
1836 November 3 – December 7 – U.S. presidential election, 1836: Martin Van Buren elected president, no one is elected Vice President.
1837 - Richard M. Johnson elected vice president by the Senate. Van Buren becomes the eighth President; Johnson, Vice President. U.S. recognizes the Republic of Texas. Caroline affair. Michigan becomes a state. Oberlin College begins enrolling female students, becoming first coeducational college in the U.S. Panic of 1837. Charles River Bridge v. Warren Bridge reverses Dartmouth College v. Woodward: property rights can be overridden by public eyed
1838 – Forced removal of the Cherokee Nation from the southeastern U.S. leads to over 4,000 deaths in the Trail of Tears. Aroostook War.
1839 – Amistad case
1840 October 30 – December 2– 1840 United States presidential election: William Henry Harrison is elected president; John Tyler is elected vice president
1841 – John Quincy Adams argues the Amistad Case before the Supreme Court
1841 March 4 – Harrison becomes the ninth President; John Tyler, Vice President
1841 March 6 - Supreme Court finds for Amistad defendants. Freeing them.
1841 April 4 – Harrison dies after only a month in office
1841 April 6 - Vice President Tyler becomes the tenth President
1841  September 11 - Harrison's former cabinet resigns en masse. Only Daniel Webster remains.
1842 – Webster–Ashburton Treaty. The Dorr Rebellion: A civil war in Rhode Island. Attempt to impeach President Tyler fails. 1000 emigrants begin their  journey along the Oregon Trail.
1844 – Oregon message.
1844 November 1 – December 4 – U.S. presidential election, 1844, James K. Polk is elected president; George M. Dallas is elected vice president
1845 December 29 – Texas annexation
1845 – Florida and Texas become states
1846 – The U.S.–Mexican War begins. Bear Flag revolt in Alta California, which is momentarily independent. Iowa becomes a state. Wilmot Proviso. The United States and  Great Britain sign the  Oregon Treaty
1847 - Abraham Lincoln introduces himself to the world by his introduction of the Spot Resolutions in the House. Battle of Buena Vista.
1847 March 9 – 29 - Battle of Veracruz
1848 November 7 – U.S. presidential election, 1848; Zachary Taylor is elected president; Millard Fillmore is elected vice president
1848 – Wisconsin becomes a state. The Treaty of Guadalupe Hidalgo ends the Mexican–American War.  Dred Scott sues for his freedom
1849 – Taylor becomes the 12th President; Fillmore, Vice President. California Gold Rush begins. Clayton–Bulwer Treaty
1850 – President Taylor threatens to veto Compromise of 1850 even if it means Civil War.
1850 June 3–11 -The secessionist Nashville Convention held in Nashville, Tennessee.
1850 July 9 – President Taylor dies, Vice President Fillmore becomes the 13th President
1850 September 9-20– The Compromise of 1850, including the notorious Fugitive Slave Act passed
1850 September 9 – California becomes a state
1850 November - Nashville Convention reconvenes; Satisfied with the Compromise, it declares the Union intact-for the moment.
1852 – U.S. presidential election, 1852: Franklin Pierce elected president; William R. King elected vice president
1853 – Commodore Matthew Perry opens Japan. Pierce becomes the 14th President; King, Vice President. Vice President King dies after only six weeks in office. Gadsden Purchase from Mexico
1854 – Kansas–Nebraska Act; nullified Missouri Compromise. Ostend Manifesto. Whig Party collapses.  Treaty of Kanagawa with Japan. Walker Expedition into Nicaragua
1855 – The Farmers' High School, which becomes Penn State University is founded.
1856 – Sack of Lawrence, Kansas. Pottawatomie massacre. Preston Brooks beats Charles Sumner with his walking stick on the steps of the U.S. Capitol building
1856 November 4 – U.S. presidential election, 1856: James Buchanan elected president; John C. Breckinridge, vice president
1857 – Buchanan becomes the 15th President; Breckinridge, Vice President. Dred Scott v. Sandford 60 US 393 1857 declares that slaves and blacks descended from slaves were not American citizens and cannot sue. Utah War. Lecompton Constitution rejected in Kansas Territory. Panic of 1857
1858 – Transatlantic cable laid. Minnesota becomes a state. Lincoln-Douglas Debates. U.S. is party to Treaty of Tientsin
1859 – John Brown's raid on Harpers Ferry. Comstock Lode discovered
1860 April 3 – Pony Express begins.
1860 November 6 – 1860 United States presidential election: Abraham Lincoln elected president and Hannibal Hamlin vice president with only 39% of the vote in a four man race.
1860 December 18 – Crittenden Compromise fails.
1860 December 20 – President Buchanan fires his cabinet. South Carolina secedes from the Union
1861 January 9 – Secessionist forces in South Carolina fire at the USS Star of the West, forcing it to withdraw. Mississippi secedes from the Union
1861 January 10 – Florida secedes from the Union
1861 January 11 – Alabama secedes from the Union
1861 January 19 – Georgia secedes from the Union
1861 January 26 – Louisiana secedes from the Union
1861 February 1 – Texas secedes from the Union
1861 February 4 – Secessionist states establish the Confederate States of America
1861 February 18 – Jefferson Davis elected Provisional President of the Confederacy
1861 March 2 – The Corwin Amendment enshrining slavery forever, is passed by congress. It is not ratified.
1861 – Lincoln becomes the 16th President; and Hamlin, Vice President. American Civil War begins at Fort Sumter. First Battle of Bull Run (First Battle of Manassas). Davis unanimously elected to full term as Confederate president.
1862 – Battle of Hampton Roads (Battle of the Monitor and Merrimack; first ever naval battle between iron-sided ships). Homestead Act. Morrill Land-Grant Colleges Act. Gen. Robert E. Lee placed in command of the Army of Northern Virginia. Second Battle of Bull Run (Second Battle of Manassas). Battle of Antietam (Battle of Sharpsburg). Dakota War of 1862 begins
1862–1863 – Lincoln issues Emancipation Proclamation
1863 – Battle of Gettysburg. The Siege of Vicksburg ends. New York City draft riots. Pro-Union Virginia counties become separate state of West Virginia. Lincoln announces the 10% Plan
1864 – Gen. Ulysses S. Grant put in command of all Union forces. Wade–Davis Bill. Sand Creek massacre. Nevada becomes a state. U.S. presidential election, 1864; Lincoln is reelected president and Andrew Johnson elected vice president on the "fusion" Union Party ticket. Sherman's March to the Sea
1865 – Robert E. Lee made commander-in-chief of all Confederate forces. President Lincoln begins second term; Andrew Johnson becomes Vice President. Richmond, Virginia, the Confederate capital, captured by a corps of black Union troops. Lee surrenders to Grant at Appomattox Court House. Freedmen's Bureau
1865 January – 13th Amendment passes, permanently outlawing slavery [1]
1865 April 15 – President Abraham Lincoln assassinated; Vice President Andrew Johnson becomes the 17th President
1865 April–June– American Civil War ends as the last elements of the Confederacy surrender
1866 – Civil Rights Act of 1866. Ku Klux Klan founded. Tennessee becomes the first Confederate state readmitted to the union
1867 – Tenure of Office Act enacted. Territory of Alaska purchased from the Russian Empire. The US Annexes the Midway Islands in the Pacific. Nebraska becomes a state. Congress passes a series of Reconstruction acts and the period of Radical Reconstruction begins
1868 – Impeachment of Andrew Johnson, acquitted by the Senate by one vote. Fourteenth Amendment is ratified; second of Reconstruction Amendments. Ulysses S. Grant is elected president and Schuyler Colfax Vice President of USA. Arkansas, Louisiana, Florida, North Carolina, South Carolina, and Alabama are admitted back into the union. Boss Tweed gained control of Tammany Hall
1869 – Grant becomes the 18th President and Colfax Vice President. The First Transcontinental Railroad is completed at Promontory Summit, Utah Territory. Texas v. White upholds Radical Reconstruction and states that once Texas joins the Union, its union was indissoluble
1870 – 15th Amendment. First graduate programs (at Yale and Harvard). 1870 black codes. Virginia, Mississippi, Texas, and Georgia are readmitted to the union
1871 – Great Chicago Fire. Treaty of Washington with the British Empire regarding Canada. The New York Times published evidence of Tweed’s rampant greed. Civil Service Reform Act passes. Ku Klux Klan Act
1872 – Yellowstone National Park created. Crédit Mobilier scandal. Amnesty Act. Alabama Claims. Victoria Claflin Woodhull, first woman presidential candidate, enters presidential race.
1872 November 5 – U.S. presidential election, 1872: Ulysses S. Grant reelected president; Henry Wilson elected vice president
1873 – Panic of 1873. President Grant begins second term; Henry Wilson becomes Vice President. Virginius Affair. One of the first schools of nursing opens at Bellevue Hospital in New York
1874 – Red River Indian War. National Woman’s Christian Temperance Union formed in Cleveland
1875 – Aristides (horse) wins first Kentucky Derby. Resumption Act. Civil Rights Act of 1875. The Art Students League of New York is founded. Vice President Wilson dies. Whiskey Ring Scandal
1876 – National League of baseball founded. Centennial Exposition in Philadelphia. Munn v. Illinois establishes public regulation of utilities. Colorado becomes a state. Battle of Little Bighorn. Central Park opens in New York City. Wild Bill Hickok is killed by a shot to the back of his head by Jack McCall while playing poker in Deadwood, South Dakota. He held aces and eights, now known as the Dead man's hand.
1876 November 7 – U.S. presidential election, 1876 seemingly elects Samuel J. Tilden President and Thomas A. Hendricks vice president, but results are disputed with 20 Electoral College votes allegedly in doubt.
1877 – The Electoral Commission awards Rutherford B. Hayes the presidency and William A. Wheeler the vice presidency in return for ending the military occupation of the South. Great Railroad Strike of 1877. After only two days as president-elect, Hayes becomes the 19th President and Wheeler Vice President. Reconstruction ends. Nez Perce War
1878 – Bland–Allison Act. Morgan silver dollars first minted
1879 – Thomas Edison creates first commercially viable light bulb. Knights of Labor go public
1880 – University of Southern California founded. U.S. population exceeds 50 million
1880 November 2– U.S. presidential election, 1880: James A. Garfield elected president and Chester A. Arthur vice president. Their popular margin is less than 2,000 votes.
1881 – Garfield becomes the 20th President. President Garfield is shot by a deranged gunman. President Garfield dies after 99 days, Vice President Arthur becomes the 21st President. The Gunfight at the O.K. Corral in Tombstone, Arizona Territory. Clara Barton creates the American Red Cross. Tuskegee Institute founded. Billy the Kid is shot and killed by Sheriff Pat Garrett. A Century of Dishonor written by Helen Hunt Jackson
1882 – Chinese Exclusion Act. Jesse James was shot and killed by Robert and Charlie Ford
1883 - The Southern section of the second transcontinental railroad line is completed. Buffalo Bill's Wild West show founded. participants include: Sitting Bull, Geronimo, Calamity Jane, and Annie Oakley. Civil Rights Cases 109 US 3 1883 legalizes doctrine of segregation. Pendleton Civil Service Reform Act. Brooklyn Bridge opens. Joseph Pulitzer buys the New York World
1884 November 4– U.S. presidential election, 1884: Grover Cleveland elected president and Thomas A. Hendricks elected vice president
1884 – Washington Monument completed
1885 – Grover Cleveland becomes the 22nd President; Thomas A. Hendricks Vice President. Vice President Hendricks dies
1886 – Haymarket Square Riot. American Federation of Labor founded in Columbus, Ohio. Statue of Liberty (Liberty Enlightening the World) dedicated
1887 – The United States Congress creates Interstate Commerce Commission. Dawes Act. Hatch Act.
1888 – Publication of Looking Backward by Edward Bellamy. National Geographic Society founded
1888 November 6 – U.S. presidential election, 1888: Benjamin Harrison elected president and Levi P. Morton vice president despite coming in second in the popular vote.
1889 – Harrison becomes the 23rd President and Morton becomes Vice President. During a speech given by Benjamin Harrison , he becomes the first U.S. president in history to have a voice recording. Centennial of the Constitution celebrated. North Dakota, South Dakota, Montana and Washington become states. Johnstown Flood in Pennsylvania. Jane Addams founds Hull House.
1889 April 22– Oklahoma Land Rush
1889 December 6– Former confederate president Jefferson Davis dies.
1890 – Sherman Antitrust Act. Jacob Riis published "How the Other Half Lives." Sherman Silver Purchase Act. McKinley Tariff
1890 – Yosemite National Park created. Idaho and Wyoming become states. Wounded Knee Massacre. National American Woman Suffrage Association founded. Reporter Nelly Bly circles globe by train and steamship in 72 days
1891 – Baltimore crisis. James Naismith invents basketball. Hamlin Garland publishes Main-Travelled Roads
1892 – Homestead Strike. General Electric Company founded. Sierra Club founded by John Muir. Populist national convention held in Omaha.
1892 November 8 – U.S. presidential election, 1892: Grover Cleveland elected president and Adlai E. Stevenson, vice president
1893 – Grover Cleveland becomes the 24th President; Adlai E. Stevenson becomes Vice President. Panic of 1893. Sherman Silver Purchase Act repealed. Columbian Exposition opens in Chicago
1894 – Coxey's Army. Pullman Strike. Wilson–Gorman Tariff Act, including income tax. Sunset Limited service opened on the second transcontinental route by Southern Pacific Railroad
1895 – Lee Shelton shoots Billy Lyons, spawning countless ballads. Pollock v. Farmers' Loan & Trust Co. strikes down part of Wilson-Gorman Tariff. William Randolph Hearst purchases the New York Morning Journal. Plessy v. Ferguson 163 US 537 1896 affirms the idea of "separate but equal"
1896 – William Jennings Bryan delivers his Cross of Gold speech. Gold discovered in the Yukon's Klondike. Utah becomes a state. Henry Ford builds his first automobile
1896 November 3 – U.S. presidential election, 1896: William McKinley elected president and Garret A. Hobart vice president
1897 – McKinley becomes the 25th President; and Hobart becomes Vice President. Boston subway completed. Dingley tariff
1898 – The City of Greater New York is created through the annexation of Brooklyn, Western Queens County, and Staten Island into New York City. USS Maine explodes in Havana, Cuba harbor, precipitating the Spanish–American War. De Lôme Letter. Treaty of Paris (1898) ends Spanish–American War; Philippine–American War begins. Hawaii annexed. Newlands Resolution. American Anti-Imperialist League organized
1899 – Teller Amendment. Newsboys' strike of 1899. American Samoa occupied. Open Door Notes. Vice President Hobart dies
 
1901 – President McKinley assassinated, Vice President Roosevelt becomes the 26th President. U.S. Steel founded by John Pierpont Morgan. Hay–Pauncefote Treaty. Louis Armstrong born. Jacquan Boyd born
1902 – Drago Doctrine. First Rose Bowl game played. Newlands Reclamation Act
1903 – Great Train Robbery movie opens. Harley–Davidson Motor Company created. Ford Motor Company formed. First World Series. Elkins Act. Big Stick Diplomacy. Hay–Bunau–Varilla Treaty. Hay–Herrán Treaty. Department of Commerce and Labor created. The Wright brothers make their first powered flight in the Wright Flyer at Kitty Hawk, North Carolina
1904 – Roosevelt Corollary to Monroe Doctrine. Panama Canal Zone acquired. World's Fair St. Louis
1904 November 8 – U.S. presidential election, 1904: Theodore Roosevelt elected president for full term; Charles W. Fairbanks elected vice president
1905 – President Roosevelt begins full term, Charles W. Fairbanks becomes Vice President. Niagara Falls conference. Industrial Workers of the World. Albert Einstein publishes his Theory of Relativity
1906 – Susan B. Anthony dies. Algeciras Conference. Pure Food and Drug Act and Meat Inspection Act. Hepburn Act. Theodore Roosevelt negotiates Treaty of Portsmouth, receives Nobel Peace Prize. San Francisco earthquake. Oklahoma becomes a state
1907 – Gentlemen's Agreement. Coal mine explodes in Monongah, West Virginia, killing at least 361. Worst industrial accident in American history.
1908 – Ford Model T appears on the market. Root–Takahira Agreement. Federal Bureau of Investigation established. Aldrich–Vreeland Act
1908 November 3 – U.S. presidential election, 1908: William Howard Taft elected president; James S. Sherman vice president. William Jennings Bryan loses for the third and final time.
1909 – The U.S. penny is changed to the Abraham Lincoln design. William Howard Taft becomes the 27th President, James S. Sherman becomes Vice President. Robert Peary claims to have reached the North Pole. NAACP founded by W. E. B. Du Bois. Payne–Aldrich Tariff Act. Taft implements dollar diplomacy. Pinchot–Ballinger controversy
1910 – Mann–Elkins Act. Mann Act. Supreme Court breaks up Standard Oil
1911 – Triangle Shirtwaist Factory fire. First Indianapolis 500 is staged; Ray Harroun is the first winner
1912 – RMS Titanic sinks. New Mexico and Arizona become states. Girl Scouts of the USA was started by Juliette Gordon Low. Theodore Roosevelt shot, but not killed, while campaigning for the presidency. Vice President Sherman dies
1912 November 5 – U.S. presidential election, 1912: Woodrow Wilson elected president, Thomas R. Marshall, vice president. Roosevelt becomes the only third party candidate to come in second for well over a century.
1913 – Wilson becomes the 28th President and Marshall, Vice President. Woman Suffrage Procession, a large woman suffrage parade in Washington D.C., is organized by Alice Paul and held on the eve of Wilson's inaugural. 16th Amendment, establishing an income tax. End of the Philippine–American War. The Armory Show opens in New York City introducing Modern art both American and European to the American public. 17th Amendment, establishing direct election of U.S. Senators. Underwood Tariff. Henry Ford develops the modern assembly line
1914 – Mother's Day established as a national holiday. Federal Trade Commission created. Clayton Antitrust Act. ABC Powers. World War I begins when Austria–Hungary declares war on Serbia
1915 – The Birth of a Nation opens. RMS Lusitania sunk. First transcontinental telephone is hooked up
1916 – U.S. acquires Virgin Islands. Jeannette Rankin first woman elected to U.S. congress. Louis Brandeis appointed to Supreme Court. Adamson Railway Labor Act. Federal Farm Loan Act. Jones Act. Germany agrees to restrict submarine warfare. The Great Migration begins
1916 November 7– 1916 United States presidential election: Wilson and Marshall reelected by a mere 3,773 votes in California
1917 – Zimmermann Telegram. President Wilson and Vice President Marshall begin second terms. U.S. enters World War I. Espionage and Sedition Acts. Lansing–Ishii Agreement. National Hockey League formed. U.S. Virgin Islands purchased from Denmark. Temperance movement leads to prohibition laws in 29 states
1917–1919 – Silent Sentinels hold a vigil outside the White House gates in favor of women's suffrage, a nearly two–and–a–half year demonstration organized by Alice Paul and the National Woman's Party
1917–1920 – First Red Scare, marked by a widespread fear of Bolshevism and anarchism
1918 – President Wilson's Fourteen Points, which assures citizens that the Great War was being fought for a moral cause and for postwar peace in Europe. Republicans win back Congress in the Midterm elections. Armistice agreement ends World War I. Spanish flu pandemic begins. Daylight saving time is first adopted
1919 – Treaty of Versailles agreed to by victorious powers. President Wilson has massive stroke. First Lady Edith Wilson takes over in a "silent coup". United States Senate rejects Treaty of Versailles and League of Nations. 18th Amendment, establishing Prohibition. Black Sox Scandal during that year's World Series, with the fallout lasting for decades. Sherwood Anderson publishes Winesburg, Ohio. Palmer Raids
1920 – 19th Amendment, grants women the right to vote. The Great Steel Strike ends. Sacco and Vanzetti arrested. First radio broadcasts, by KDKA in Pittsburgh and WWJ in Detroit. Volstead Act. Esch–Cummins Act. Economy collapses. Depression of 1920–21 begins. National Football League is formed
1920 November 2– U.S. presidential election, 1920: Warren G. Harding elected president, and Calvin Coolidge vice president.
1921 – Harding becomes the 29th President and Coolidge Vice President. Washington Disarmament Conference of 1921. Emergency Quota Act. After refusing to sign the Treaty of Versailles and join the League of Nations, the U.S. Senate signed separate treaties with Germany, Austria, and Hungary.
1922 – Fordney–McCumber Tariff. Lincoln Memorial is dedicated. The Nine Power Treaty
Early 1920s – Hollywood becomes the center of the movie industry.
1923 – President Harding dies; Vice President Coolidge becomes the 30th President. Teapot Dome scandal. The Cotton Club opens in Harlem. Yankee Stadium was built
1924 – Immigration Act Basic Law. Indian Citizenship Act.  J. Edgar Hoover is appointed director of the Bureau of Investigation — predecessor to the FBI.
1924 November 4– U.S. presidential election, 1924: Calvin Coolidge elected president for a full term, Charles G. Dawes elected vice president
1924 – The Dawes Plan
1925 – President Coolidge begins full term, Charles G. Dawes becomes Vice President. Scopes Trial, whose outcome found that the teaching of evolution in the classroom "does not violate church and state or state religion laws but instead, merely prohibits the teaching of evolution on the grounds of intellectual disagreement." Nellie Tayloe Ross elected governor of Wyoming. WSM broadcasts the Grand Ole Opry for the first time. Countee Cullen published a book of poems called Color. F. Scott Fitzgerald publishes The Great Gatsby
1926 – NBC founded as the U.S.'s first major broadcast network. United States intervenes in Nicaragua.  Opportunity Magazine publishes Langston Hughes' The Weary Blues. The Sun Also Rises by Ernest Hemingway is published.
1927 – Sacco and Vanzetti executed, seven years after they were convicted of murdering two men during an armed robbery in Massachusetts. Charles Lindbergh makes first trans–Atlantic flight. The Jazz Singer, the first motion picture with sound, is released. U.S. citizenship granted to inhabitants of U.S. Virgin Islands. Columbia Broadcasting System (later called CBS) was founded, becomes second national radio network in the U.S.. The 15,000,000th Model T rolled off the Assembly Line at Ford Motor Company. Babe Ruth hits a record 60 home runs in a single season
1928 – Disney's Steamboat Willie opens, the first animated picture to feature Mickey Mouse. Kellogg–Briand Pact. Amelia Earhart becomes the first woman to fly across the Atlantic Ocean. First color motion pictures are demonstrated by George Eastman
1928 November 6 – U.S. presidential election, 1928: Herbert C. Hoover elected president and Charles Curtis vice president
1929 – St. Valentine's Day Massacre. Herbert C. Hoover becomes the 31st President, Charles Curtis becomes the Vice President. Immigration Act. The Dow Jones Industrial Average plummets a record 68 points over a two–day period, setting off the Wall Street Crash of 1929 and triggering the Great Depression. The Museum of Modern Art (MOMA) opens to the public in New York City. American Samoa officially becomes a U.S. territory. Ernest Hemingway publishes A Farewell to Arms
 
1930 – The Motion Picture Production Code becomes set of industry censorship guidelines governing production of the vast majority of United States motion pictures released by major studios; is effective for 38 years. Frozen vegetables, packaged by Clarence Birdseye, become the first frozen food to go on sale. The Democrats take Congress in the Midterms. Will keep it until 1946.. Hawley-Smoot Tariff. Clyde Tombaugh discovered Pluto. Sinclair Lewis is the first American to win Nobel Prize for Literature
1931 – Empire State Building opens in New York. Japanese invasion of Manchuria, start of World War II in the Pacific. The Whitney Museum of American Art opens to the public in New York City. “The Star-Spangled Banner” becomes official U.S. national anthem. Hoover vetoes Veteran Bonus. Pearl Buck publishes The Good Earth
1932 – Stimson Doctrine. Norris-La Guardia Act. Hans Hofmann – influential artist and teacher emigrated to the United States from Germany. Son of Charles Lindbergh was kidnapped and later found dead. Bonus Army marches on DC. Reconstruction Finance Corporation. Ford introduces the Model B, the first low-priced car to have a V-8 engine. U.S. presidential election, 1932: Franklin D. Roosevelt elected president, John N. Garner elected vice president. American speed skaters and bobsledders earn medals in the Winter Olympics
1933 – Chicago Mayor Anton Cermak killed during a failed assassination attempt on President-elect Roosevelt. Over 12 million or 25% of Americans were unemployed. 20th Amendment, establishing the beginning and ending of the terms of the elected federal offices. Roosevelt becomes the 32nd President and Garner Vice President. They are the last president and vice president to be inaugurated on March 4. It also began his "Hundred Days." President Roosevelt establishes the New Deal, a response to the Great Depression, and focusing on what historians call the "3 Rs": relief, recovery and reform. Emergency Banking Act. Sweeping new programs proposed under President Roosevelt take effect: the Agricultural Adjustment Act, Civil Works Administration, Civilian Conservation Corps, Farm Credit Administration the Home Owners Loan Corporation, the Tennessee Valley Authority, the Public Works Administration, the National Industrial Recovery Act. San Francisco Ballet founded. Giuseppe Zangara assassinates Chicago mayor Anton Cermak; the intended target was President-elect Roosevelt, who was not wounded. Frances Perkins appointed United States Secretary of Labor. 21st Amendment, ending Prohibition. United States government recognizes the Soviet Union
1934 – Glass–Steagall Act. U.S. Securities and Exchange Commission established. Dust Bowl begins, causing major ecological and agricultural damage to the Great Plains states; severe drought, heat waves and other factors were contributors. Federal Housing Administration. Johnson Act. Indian Reorganization Act. Philippine Commonwealth established. Reciprocal Trade Agreements Act. Tydings–McDuffie Act. John Dillinger killed. Indian Reorganization Act. Share the Wealth society founded by Huey Long. The first federal prisoners arrived at Alcatraz
1935 – Works Progress Administration. The F.B.I. is established with J. Edgar Hoover as its first director. Neutrality Act. Motor Carrier Act. Social Security Act. Schechter Poultry Corp. v. United States. National Labor Relations Act. Huey Long assassinated. Congress of Industrial Organizations formed. Alcoholics Anonymous founded. Revenue Act of 1935. Middletown is published
1936 – Robinson-Patman Act. Hoover Dam. Life magazine publishes first issue. United States v. Butler, which ruled that the processing taxes instituted under the 1933 Agricultural Adjustment Act were unconstitutional. Second London Naval Treaty. Jesse Owens won 4 gold medals at the Olympics in Berlin, Germany. 1936 Tupelo–Gainesville tornado outbreak. Babe Ruth and Ty Cobb named to baseball’s Hall of Fame
1936 November 3– U.S. presidential election, 1936: Franklin D. Roosevelt reelected president, John N. Garner reelected vice president
1937 – Look magazine publishes first issue. Neutrality Acts. President Roosevelt and Vice President Garner begin second terms and attempt to pack the Supreme Court. Hindenburg disaster, killing 35 people and marking an end to airship travel. Panay incident, a Japanese attack on the United States Navy gunboat USS Panay while anchored in the Yangtze River outside of Nanjing. Golden Gate Bridge completed in San Francisco
1938 – Wheeler-Lea Act. Fair Labor Standards Act. Thornton Wilder’s play Our Town wins Pulitzer Prize. The comic book superhero Superman debuts in Action Comics #1 (June 1938). Orson Welles' The War of the Worlds broadcast.
1939 – Hatch Act, aimed at corrupt political practices and prevented federal civil servants from campaigning. Nazi Germany invades Poland; World War II begins. Cash and carry proposed to replace the Neutrality Acts. President Roosevelt, appearing at the opening of the 1939 New York World's Fair, becomes the first President to give a speech that is broadcast on television. Semi-regular broadcasts air during the next two years
1940 – Selective Service Act, establishing the first peacetime draft in U.S. history. Alien Registration (Smith) Act. Oldsmobile becomes the first car maker to offer a fully automatic transmission. Bugs Bunny, Tom and Jerry and Woody Woodpecker make their cartoon debuts. Billboard magazine publishes its first music popularity chart, the predecessor to today's Hot 100.
1940 November 5 – U.S. presidential election, 1940: Franklin D. Roosevelt is reelected president to a record third term, Henry A. Wallace is elected vice president. Color television is demonstrated by the Columbia Broadcasting System. Regular commercial television broadcasting begins; CBS and NBC television networks launched.
1941 – President Roosevelt begins third term; Wallace becomes Vice President. Lend-Lease, which supplies the United Kingdom, the Soviet Union, China, France and other Allied nations with vast amounts of war material during World War II. Operation Barbarossa. Attack on Pearl Harbor; U.S. enters World War II by declaring war on Japan the next day on December 8; and three days later against Germany and Italy. Atlantic Charter, drafted by the UK and U.S., to serve as the blueprint for the postwar world after World War II. Japanese American internment begins, per executive order by President Roosevelt; the order also authorizes the seizure of their property.
1942–1945 – Automobile production in the United States for private consumers halted.
1942 – Casablanca released. Sugar and gasoline are rationed. Cocoanut Grove fire kills 492 people, leads to vast reforms in fire codes and safety standards. Congress of Racial Equality. Revenue Act of 1942. Doolittle Raid. Battle of the Coral Sea. Battle of Midway. Guadalcanal Campaign. Operation Torch. U.S.-controlled Commonwealth of the Philippines conquered by Japanese forces. Office of Price Administration established.
1943 - Oklahoma! the first musical written by the team of composer Richard Rodgers and librettist Oscar Hammerstein II opens on Broadway. Detroit, Michigan race riots. Allied invasion of Sicily. Allied invasion of Italy. Cairo Conference. Casablanca Conference. Tehran Conference (meeting between the leaders of USSR, UK, and US to discuss D-day)
1944 – Battle of Monte Cassino. Dumbarton Oaks Conference. G.I. Bill. D-Day (also known as Operation Overlord). Bretton Woods Conference. Battle of Peleliu. Battle of Leyte. Battle of the Bulge
1944 November 7 – U.S. presidential election, 1944: Franklin D. Roosevelt reelection for a fourth term, becomes the only U.S. president elected four times. Harry S. Truman is elected vice president
1945 – President Roosevelt begins fourth term; Truman becomes Vice President. Yalta Conference. Battle of Iwo Jima. Battle of Okinawa. Nationwide labor strikes due to inflation; OPA disbanded. President Roosevelt dies, Vice President Truman becomes the 33rd President. Tennessee Williams’s play The Glass Menagerie opens in New York
1945 April 12 - Vice president Truman takes over after being Roosevelt's VP for only 88 days.
1945 May 8 – Germany surrenders, end of World War II in Europe.  Carousel opens on Broadway
1945 April – June – United Nations Conference on International Organization; United Nations established
1945 June 26– United Nations Charter signed in San Francisco, establishing the United Nations; it replaces the League of Nations
1945 July 17 – August 2 – Potsdam Conference
1945 August – Atomic bombs dropped on Hiroshima and Nagasaki (August 6, August 9). Days later, Japan surrenders, ending World War II
1945–1949 – Nuremberg Trials and Subsequent Nuremberg Trials
1946 – Winston Churchill's Iron Curtain speech. Benjamin Spock's The Common Sense Book of Baby and Child Care published. Employment Act. United States Atomic Energy Act of 1946. President's Committee on Civil Rights. Philippines regain independence from the U.S.. Republicans take control of Congress for the first time in 16 years.
1947 – Presidential Succession Act. Taft Hartley Act. U.F.O. crash at Roswell, New Mexico. National Security Act of 1947. General Agreement on Tariffs and Trade. The Marshall Plan. Polaroid camera invented. Truman Doctrine establishes "the policy of the United States to support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures". Federal Employee Loyalty Program. Jackie Robinson breaks color barrier in baseball. Studebaker becomes the first automobile manufacturer to introduce a "post-war" model; most automakers wait until 1948 or 1949. Jackson Pollock begins painting his most famous series of paintings called the drip paintings in Easthampton, New York. First broadcast of Meet the Press. World Series is broadcast live on television for the first time
1948 – The Texaco Star Theater, starring Milton Berle, becomes the first major successful U.S. television program; The Toast of the Town also debuts. Berlin Blockade. Truman desegregates armed forces. – Selective Service Act of 1948: Passed after first such act expired. Organization of American States: Alliance of North America and South America. Alger Hiss Case
1948 November 2– U.S. presidential election, 1948: Harry S. Truman is elected president for a full term, Alben W. Barkley is elected vice president
1949 – President Truman begins full term, Barkley becomes Vice President. North Atlantic Treaty Organization (NATO) formed. In China, Communists under Mao Zedong force Chiang Kai-shek's KMT government to retreat to Taiwan. Soviet Union tests its first atomic bomb. Department of War becomes the Department of the Army and becomes subordinate to the new Department of Defense. Germany divided into East and West. Truman attempts to continue FDR's legacy with his Fair Deal, but most acts don't pass
 
1950 – Senator Joseph McCarthy gains power, and McCarthyism (1950–1954) begins. McCarran Internal Security Act. Korean War begins. The comic strip Peanuts, by Charles M. Schulz, is first published. NBC airs Broadway Open House a late-night comedy, variety, talk show through 1951. Hosted by Morey Amsterdam and Jerry Lester and Dagmar, it serves as the prototype for The Tonight Show. Failed assassination attempt by two Puerto Rican nationals on President Harry S. Truman while the President was living at Blair House.
1951 – 22nd Amendment, establishing term limits for president. Mutual Security Act. General Douglas MacArthur fired by President Truman for comments about using nuclear weapons on China. The first live transcontinental television broadcast takes place in San Francisco, California from the Japanese Peace Treaty Conference. One month later, the situation comedy I Love Lucy premieres on CBS, sparking the rise of television in the American home and the Golden Age of Television. See It Now, an American newsmagazine and documentary series broadcast by CBS from 1951 to 1958. It was created by Edward R. Murrow and Fred W. Friendly, Murrow being the host of the show. The Catcher in the Rye is published by J. D. Salinger and invigorates the rebellious youth of the period, eventually earning the title of a Classic with its profound impact.
1952 – The debut of the Today show on NBC, originally hosted by Dave Garroway is the fourth longest running talk show on television. ANZUS Treaty enters into force. Immigration and Nationality Act. In the United States presidential election, Dwight D. Eisenhower elected as president, Richard Nixon elected as vice president
1953 – Eisenhower becomes the 34th President and Nixon Vice President. Rosenbergs executed. Korean Armistice Agreement. Shah of Iran returns to power in CIA-orchestrated coup known as Operation Ajax
1954 – The Tournament of Roses Parade becomes the first event nationally televised in color. Detonation of Castle Bravo, a 15 megaton Hydrogen bomb on Bikini Atoll, 1,000 times more powerful than the Hiroshima and Nagasaki weapons, vaporized three islands, displaced the islanders and caused long lasting contamination. Joseph McCarthy discredited in Army-McCarthy hearings. Censure or formal disapproval on Senator Joseph McCarthy after the Army-McCarthy hearings. He died three years later in 1957. President Eisenhower proposes the Domino theory: If South Vietnam fell to communism, so too would all nations of Southeast Asia, and eventually worldwide. First Indochina War ends after the U.S. kept sending aid to the French. France was defeated by Ho Chi Minh and his army at the Battle of Dien Bien Phu. The CIA overthrows Guatemala's president Jacobo Arbenz Guzmán (Operation PBSuccess). Saint Lawrence Seaway Act, permitting the construction of the system of locks, canals and channels that permits ocean-going vessels to travel from the Atlantic Ocean to the North American Great Lakes, is approved. Brown v. Board of Education, a landmark decision of the Supreme Court, declares state laws establishing separate public schools for black and white students and denying black children equal educational opportunities unconstitutional. The U.S. becomes a member of the Southeast Asia Treaty Organization (or SEATO) alliance. Geneva Conference. U.S. rejects the French decision to recognize Communist control of North Vietnam. U.S. increases aid to South Vietnam. The People's Republic of China lays siege on Quemoy and Matsu Islands; Eisenhower sends in Navy to demonstrate an invasion of Taiwan would not be permitted. The Dow Jones Industrial Average closes at an all-time high of 382.74, the first time the Dow has surpassed its peak level reached just before the Wall Street Crash of 1929. NBC airs The Tonight Show, the first late-night talk show, originally hosted by Steve Allen. The Democrats retake both houses of Congress in the Midterms. Will keep the Senate until 1981 and the House until 1994.
1955 – Ray Kroc opens a McDonald's fast food restaurant and, after purchasing the franchise from its original owners, oversees its national (and later, worldwide) expansion. Murder of Emmett Till. Rosa Parks remains seated on a bus, the incident which evolves into the Montgomery bus boycott. AFL and CIO merge in America's largest labor union federation. Warsaw Pact, which establishes a mutual defense treaty subscribed to by eight communist states in Eastern Europe (including the USSR). Disneyland opens at Anaheim, California. Jonas Salk develops polio vaccine. Rock and roll music enters the mainstream, with "Rock Around the Clock" by Bill Haley & His Comets becoming the first record to top the Billboard pop charts. Elvis Presley also begins his rise to fame around this same time. Actor James Dean is killed in a highway accident
1956 – The controversial 1956 Sugar Bowl takes place. Georgia's pro segregationist governor publicly threatens Georgia' Tech's president to not allow the game to take place, as students riot. President Eisenhower secures passages of Interstate Highway Act, which will construct 41,000 miles (66,000 km) of the Interstate Highway System over a 20-year period. The U.S. refuses to provide military support the Hungarian Revolution. Elvis Presley appears on The Ed Sullivan Show for the first time. Marilyn Monroe marries playwright Arthur Miller. Jackson Pollock dies in a car crash. “In God We Trust" adopted as national motto.
1956 November 6 – 1956 United States presidential election: Dwight D. Eisenhower is reelected president, Richard Nixon reelected vice president.
1957 – President Eisenhower and Vice President Nixon begin second terms. Eisenhower Doctrine, wherein a country could request American economic assistance and/or aid from military forces if it was being threatened by armed aggression from another state. Civil Rights Act of 1957, primarily a voting rights bill, becomes the first civil rights legislation enacted by Congress since Reconstruction. Soviets launch Sputnik; "space race" begins. Shippingport Atomic Power Station, the first commercial nuclear power plant in the U.S., goes into service. Little Rock, Arkansas school desegregation. Eisenhower recruits the U.S. National Guard to escort the Little Rock Nine
1958 – National Defense Education Act. The Affluent Society written by John Galbraith. NASA formed as the U.S. begins ramping up efforts to explore space. Jack Kilby invents the integrated circuit.
1959 – The NBC western Bonanza becomes the first drama to be broadcast in color. Cuban Revolution. Landrum–Griffin Act, a labor law that regulates labor unions' internal affairs and their officials' relationships with employers, becomes law. Alaska and Hawaii became the 49th and 50th U.S. states; as of 2021, they are the final two states admitted to the union. Buddy Holly, Ritchie Valens, and The Big Bopper are killed in Clear Lake, Iowa in a plane crash.
1960 – U-2 incident, wherein a CIA U-2 spy plane was shot down while flying a reconnaissance mission over Soviet Union airspace. Greensboro sit-ins, sparked by four African American college students refusing to move from a segregated lunch counter, and the Nashville sit-ins, spur similar actions and increases sentiment in the Civil Rights Movement. Author Harper Lee publishes To Kill A Mockingbird. Civil Rights Act of 1960, establishing federal inspection of local voter registration polls and penalties for those attempting to obstruct someone's attempt to register to vote or actually vote. National Front for the Liberation of Vietnam formed. John Fitzgerald Kennedy defeats Vice President under the Eisenhower administration, Republican Richard Milhous Nixon. The campaign included the first televised United States presidential debate.
1960 November 8– 1960 United States presidential election: John F. Kennedy elected president, Lyndon B. Johnson elected vice president
1961 – US breaks diplomatic relations with Cuba. Eisenhower gives celebrated "military–industrial complex" farewell address. John F. Kennedy becomes the 35th President, Johnson, Vice President. 23rd Amendment, which grants electors to the District of Columbia. Peace Corps established. Alliance for Progress. Bay of Pigs Invasion. Alan Shepard pilots the Freedom 7 capsule to become the first American in space. Trade embargo on Cuba. Berlin Crisis of 1961. Vietnam War officially begins with 900 military advisors landing in Saigon. OPEC (The Organization of Petroleum Exporting Countries) formed
1962 – Trade Expansion Act. Andy Warhol becomes famous for his Campbell's Soup Cans painting. John Glenn orbits the Earth in Friendship 7, becoming the first American to do so. Cuban Missile Crisis, the closest nuclear confrontation involving the U.S. and USSR. Baker v. Carr, enabling federal courts to intervene in and to decide reapportionment cases. Engel v. Vitale, determines that it is unconstitutional for state officials to compose an official school prayer and require its recitation in public schools. Students for a Democratic Society (SDS). The comic-book superhero Spider-Man debuts in Amazing Fantasy #15 (August 1962) by Marvel Comics. Marilyn Monroe dies of an apparent overdose from acute barbiturate poisoning at 36.
1963 – Bob Dylan and Columbia Records release The Freewheelin' Bob Dylan (his second studio album), which becomes a classic. Atomic Test Ban Treaty. March on Washington; Martin Luther King Jr. "I Have a Dream" speech. The Feminine Mystique by Betty Friedan published, sparking the women's liberation movement. Community Mental Health Act signed by Kennedy. Assassination of John F. Kennedy in Dallas; Vice President Lyndon B. Johnson becomes the 36th President. The man accused of assassinating President Kennedy, Lee Harvey Oswald, is shot and killed by Dallas nightclub owner Jack Ruby. The assassination marks the first 24-hour coverage of a major news event by the major networks.
1964 – The Beatles arrive in the U.S., and subsequent appearances on The Ed Sullivan Show, mark the start of the British Invasion (or, an increased number of rock and pop performers from the United Kingdom who became popular around the world, including the U.S.). Tonkin Gulf incident; Gulf of Tonkin Resolution. 24th Amendment, prohibiting both Congress and the states from conditioning the right to vote in federal elections on payment of a poll tax or other types of tax. President Johnson proposes the Great Society, whose social reforms were aimed at the elimination of poverty and racial injustice. New major spending programs that addressed education, medical care, urban problems, and transportation were launched later in the 1960s. Economic Opportunity Act. Civil Rights Act of 1964, outlawing major forms of legalized discrimination against blacks and women, and ended legalized racial segregation in the United States. Panama Canal Zone riots. The Ford Mustang is introduced. In the election, President Johnson won by one of the largest victories in U.S. history, defeating Arizona Republican Senator Barry Goldwater. 1964 United States presidential election: Johnson elected president for a full term, Hubert H. Humphrey elected vice president
1965 – President Johnson begins full term, Humphrey becomes Vice President. President Johnson escalates the United States military involvement in the Vietnam War. Students for a Democratic Society (SDS) and the Student Nonviolent Coordinating Committee (SNCC), a civil rights activist group, led the first of several anti-war marches in Washington, D.C., with about 25,000 protesters. President Johnson appoints Thurgood Marshall as the first African-American Supreme Court Justice. Immigration Act of 1965. Voting Rights Act. Medicaid and Medicare enacted. Higher Education Act of 1965. Malcolm X, an African-American Muslim minister, public speaker, and human rights activist is assassinated in Harlem, New York. The Watts riots in the Watts neighborhood of Los Angeles, lasts six days and is the first of several major urban riots due to racial issues.
1966 – Department of Housing and Urban Development (HUD) established. Department of Transportation created. National Traffic and Motor Vehicle Safety Act. Miranda v. Arizona established "Miranda rights" for suspects. Feminist group National Organization for Women (NOW) formed. The three major American television networks—NBC, CBS and ABC—have full color lineups in their prime-time schedules. Heavyweight boxing champion Muhammad Ali (formerly known as Cassius Clay) declared himself a conscientious objector and refused to go to war. In 1967 Ali was sentenced to five years in prison for draft evasion, but his conviction was later overturned on appeal. In addition, he was stripped of his title and banned from professional boxing for more than three years.
1967 – Jack Ruby died of a pulmonary embolism, secondary to bronchogenic carcinoma (lung cancer), on January 3, 1967 at Parkland Hospital, where Oswald had died and where President Kennedy had been pronounced dead after his assassination. The first Super Bowl is played, with the Green Bay Packers defeating the Kansas City Chiefs 35–10. Detroit race riot precipitates the "Long Hot Summer of 1967", when race riots erupt in 159 cities nationwide. The Outsiders published by S.E. Hinton. Glassboro Summit Conference between U.S. president Lyndon Johnson and Soviet Premier Alexei Kosygin. The "Summer of Love" embodies the growing counterculture, with the Monterey Pop Festival and Scott McKenzie's "San Francisco (Be Sure to Wear Flowers in Your Hair)" among the highlights. 25th Amendment establishes succession to the Presidency and procedures for filling a vacancy in the office of the Vice President. American Samoa becomes self-governing under a new constitution
1968 – On March 31, incumbent President Lyndon B. Johnson announces to the nation on television that he will not seek re-election for the Election of 1968, Opposition toward him and the Democratic Party was growing. The escalation of Vietnam was one of these issues. Assassination of Martin Luther King Jr. The National Front for the Liberation of Vietnam launches the Tet Offensive. Civil Rights Act of 1968, commonly known as the Fair Housing Act. New York Senator Robert F. Kennedy is assassinated in Los Angeles, after winning the California primary for the Democratic Party's nomination for President, by Sirhan Sirhan. Police clashes with anti-war protesters in Chicago, outside the 1968 Democratic National Convention. U.S. signs Nuclear Non-Proliferation Treaty. East L.A. walkouts, or Chicano Blowouts. Apollo 8 and its three-astronaut crew orbit the Moon, Earthrise photograph taken. Music group Simon and Garfunkel release "Mrs. Robinson" from their album The Graduate. President Johnson awards medals of honor to soldiers from Vietnam.
1968 November 5– 1968 United States presidential election: Richard Nixon elected president, Spiro T. Agnew elected vice president; Shirley Chisholm becomes first black woman elected to U.S. Congress
1969 – Nixon becomes the 37th President, Agnew Vice President. "Vietnamization" begins. Author Maya Angelou publishes I Know Why The Caged Bird Sings. Stonewall riots in New York City marks the start of the modern gay rights movement in the U.S. Chappaquiddick incident, where Sen. Edward M. Kennedy drives off a bridge on his way home from a party on Chappaquiddick Island, Massachusetts, killing his passenger, Mary Jo Kopechne. Neil Armstrong and Buzz Aldrin walk on the Moon on the Apollo 11 mission. The Woodstock Festival in White Lake, New York, becomes an enormously successful musical and cultural gathering; a milestone for the baby-boom generation. Warren E. Burger appointed Chief Justice of the United States to replace Earl Warren. U.S. bombs North Vietnamese positions in Cambodia and Laos. Sesame Street premieres on National Educational Television. Secret peace talks with Vietnam begin. Although 100-1 shots at the beginning of the season, the New York Mets win the World Series.
 
1970 – The first Earth Day is observed. Kent State and Jackson State shootings occur during student protests which grow violent. American Top 40, hosted by radio personality Casey Kasem, becomes the first successful nationally syndicated radio program featuring a weekly countdown. The Public Broadcasting System (PBS) begins operations, succeeding National Educational Television (NET). Singer-songwriter-guitarist-musician Jimi Hendrix dies of a drug overdose at the age 27. Singer Janis Joplin dies of a drug overdose at the age of 27. The Environmental Protection Agency is created. The Occupational Safety and Health Act, or OSHA, is signed into law.
1971 – Singer Jim Morrison dies of a drug overdose at the age of 27. President Richard Nixon ends the United States Gold standard monetary policy, known as the Nixon Shock. A ban on radio and television cigarette advertisements goes into effect in the United States. The landmark situation comedy, All in the Family, premieres on CBS. The 26th Amendment is ratified, allowing 18-year-olds to vote. In New York Times Co. v. United States, the U.S. Supreme Court rules that the Pentagon Papers may be published, rejecting government injunctions as unconstitutional prior restraint.
1972 – President Richard Nixon visits China, an important step in formally normalizing relations between the United States and China. The Anti-Ballistic Missile Treaty is signed with the USSR. First African-American major league baseball player Jackie Robinson dies. Watergate scandal: Five men arrested for the burglary of the Democratic National Committee headquarters at the Watergate office complex in Washington, D.C.. U.S. presidential election, 1972: Richard M. Nixon re-elected president, Spiro T. Agnew reelected vice president. Apollo 17 flies to the Moon, and becomes the last manned mission there (as of May 2021).
1973 – President Nixon and Vice President Agnew begin second terms. Former president Lyndon B. Johnson dies in Stonewall, Texas, of his third and final heart attack. It was at the LBJ ranch. State Funeral of President Lyndon Johnson. Roe v. Wade Supreme Court ruling overturns state laws against abortion. The Paris Peace Accords ends direct U.S. involvement in the Vietnam War. The Senate Watergate hearings begin, highlighted by Fred Thompson's discovery of Nixon's secret tapes. Skylab is launched as the USA's first space station. Vice President Spiro T. Agnew resigns in disgrace as part of a plea bargain. Representative Gerald R. Ford of Michigan becomes the first person to be appointed Vice President under the 25th Amendment to the Constitution. Watergate scandal: President Nixon fires two Attorneys General, and their appointed acting-Attorney General replacement fires the Watergate Special Prosecutor over disposition of the secret tapes.
1973–1974 — The United States is affected by the Arab Oil Embargo; gasoline prices skyrocket as supplies of gasoline and heating oil are in short supply. In response, daylight saving time is started in January (nearly four months earlier than usual), and the national speed limit is lowered to 55 mph.
1974 – The 1974 Super Outbreak, the second-largest series of tornadoes in history (at 148), hits 13 U.S. states and one Canadian province; 315 people are killed and more than 5,000 are injured. Hank Aaron of the Atlanta Braves breaks Babe Ruth's home run record by hitting his 715th career home run. Watergate scandal: The House Judiciary Committee votes to impeach the President. Sweet Home Alabama released by Lynyrd Skynyrd.
1974 – President Nixon resigns, becoming the first and only U.S. President to step down. Vice President Ford becomes the 38th President. Nelson A. Rockefeller of New York becomes the second person to be appointed Vice President under the 25th Amendment to the Constitution. Watergate scandal: Ford pardons Nixon for any crimes he may have committed against the United States while President, believing it to be in the "best interests of the country." Restrictions are removed on holding private gold within the United States.
1975 – President Ford signs The Helsinki Accords. The movie Jaws is released. It is a landmark in Steven Spielberg's movie career. Construction of the Trans-Alaska Pipeline System begins. The Vietnam War ends. Fall of Saigon. Bill Gates founds Microsoft, which will eventually dominate the home computer operating system market. The Apollo–Soyuz Test Project begins, where an American Apollo spacecraft and a Soviet Soyuz spacecraft dock in orbit, marking the first such link-up between spacecraft from the two nations. President Ford survives two assassination attempts in a 17-day span. The television series Wheel of Fortune and Saturday Night Live premiere on NBC. Sony's Betamax becomes the first commercially successful home video recording unit.
1976 – The Copyright Act of 1976 makes sweeping changes to United States copyright law. Steve Jobs, Steve Wozniak, and Ronald Wayne found Apple Inc. Americans celebrate the Bicentennial of the United States. U.S. presidential election, 1976: Jimmy Carter is elected president, Walter F. Mondale is elected vice president.
1977 – Carter sworn in as the 39th President, Mondale as Vice President. The first home personal computer, the Commodore PET, is released for retail sale. The television miniseries Roots airs on ABC, to critical acclaim and record audiences. The science-fiction space opera film Star Wars debuts in theaters. The New York City blackout of 1977 lasts for 25 hours, resulting in looting and other disorder. Elvis Presley, the king of rock and roll, dies in his home in Graceland at age 42. 75,000 fans line the streets of Memphis for his funeral. The Atari 2600 becomes the first successful home video game system, popularizing the use of microprocessor-based hardware and cartridges containing game code
1978 – Volkswagen becomes the second non-American automobile manufacturer (after Rolls-Royce) to open a plant in the United States, commencing production of the Rabbit. The Camp David Accords commence, where Prime Minister Menachem Begin (Israel) and President Anwar Sadat (Egypt) begin the peace process at Camp David, Maryland. The Humphrey Hawkins Full Employment Act is signed into law, adjusting the government's economic goals to include full employment, growth in production, price stability, and a balance of trade and budget. The Senate votes to turn the Panama Canal over to Panamanian control on December 31, 1999. Supervisor Harvey Milk and Mayor George Moscone are assassinated by Dan White in San Francisco on November 27.
1979 – The Three Mile Island nuclear accident occurs, America's most catastrophic nuclear power plant accident in its history. The Iran hostage crisis begins. In the aftermath, a second energy crisis develops, tripling the price of oil and sending U. S. gasoline prices over $1 per gallon for the first time. American Airlines Flight 191 crashes after takeoff from O'Hare International Airport, killing all 271 aboard and two on the ground, making it the deadliest aviation incident on U.S. soil to date. Facing bankruptcy, Chrysler receives government loan guarantees upon the request of CEO Lee Iacocca to help revive the company. The Sugarhill Gang releases Rapper's Delight, widely considered the first major hip hop song. The hip hop music movement occurred in the Early 1970s, but would evolve over time.
1980 – The United States boycotts the Summer Olympics in Moscow to protest the 1979 Soviet invasion of Afghanistan; also announces a grain embargo against the Soviet Union with the support of the European Commission. The Refugee Act is signed into law, reforming United States immigration law and admitted refugees on systematic basis for humanitarian reasons. The Mount St. Helens eruption in Washington on 18 May kills 57. U.S. presidential election, 1980: Ronald Reagan is elected president, with George H. W. Bush elected vice president. Former Beatle John Lennon is murdered by a gunman on 8 December in New York City.
1981 – Ronald Reagan inaugurated as the 40th President (January 20, 1981 – January 20, 1989); George Bush becomes Vice President. On the same day Iran releases hostages, marking the end of the Iran hostage crisis. Attempted assassination of Ronald Reagan by John Hinckley Jr. Kemp-Roth Tax Cut. MTV signs on, becoming the first 24-hour cable network dedicated to airing music videos. A hotel walkway collapses in Kansas City, Missouri, killing 114 and injuring over 200; it was the deadliest structural collapse to occur in the United States until 9/11. The Space Shuttle Columbia is launched, marking America's first return to space since 1975. Sandra Day O'Connor becomes the first woman on the U.S. Supreme Court. In August, President Reagan fires 11,345 striking air traffic controllers. Professional Air Traffic Controllers Organization (1968)
1981–1982 — The killing of 6-year-old Adam Walsh (1981), and the disappearance of Johnny Gosch, a 12-year-old newspaper carrier from Des Moines, Iowa (1982), raise awareness of missing children cases in the United States. United States is part of the global recession, with national unemployment as high as 9%, with some areas much higher, and inflation as high as 13.5%. Early 1980s recession
1983 – 241 U.S. Marines are killed by a suicide bomb in Lebanon. The United States invades Grenada. Singer Karen Carpenter dies from complications of anorexia nervosa, raising awareness of eating disorders. Chrysler unveils its minivans — the Dodge Caravan and Plymouth Voyager (as 1984 models) — to the public. The Reagan Administration creates the Strategic Defense Initiative, nicknamed Star Wars, to block nuclear missile attacks.
1984 – Most of the Eastern Bloc boycotts the Summer Olympics in Los Angeles. U.S. presidential election, 1984: Ronald Reagan is re-elected president, with George H. W. Bush re-elected as vice president. The drug problem intensifies as crack (a smokable form of cocaine) is first introduced into the Los Angeles area. Awareness of child sexual abuse by pedophiles raised through high-profile media coverage on programs such as 60 Minutes and 20/20.
1985 – President Reagan and Vice President Bush begin their second terms. Bernhard Goetz is indicted in New York on charges of attempted murder after shooting four young men who he claimed were intent on mugging him. Professional wrestling hits the mainstream with the World Wrestling Federation's WrestleMania I and Saturday Night's Main Event I. The WWF's flagship star, Hulk Hogan, becomes a cultural icon. World awareness of famine in Third World countries spark "We Are the World" and Live Aid. Also, awareness of AIDS (acquired immune deficiency syndrome) is raised with the death of actor Rock Hudson. Country music singer Willie Nelson and John Mellencamp organize the first Farm Aid concert to raise money for family farmers facing financial crisis. The Ford Taurus and Mercury Sable (as 1986 models), and the Nintendo Entertainment System are released to the public. Gramm Rudman Hollings Balanced Budget Act
1986 – Iran–Contra affair breaks. The Space Shuttle Challenger explodes 73 seconds after liftoff, killing all seven aboard (including school teacher Christa McAuliffe) and grounding the nation's space program for 2½ years.The Firearm Owners Protection Act is signed into law by President Reagan. Tax Reform Act of 1986. The Marshall Islands become independent from the United States. The Fox Broadcasting Company launched, becoming the first "fourth major network" since DuMont to offer nightly programming.
1987 – Assorted scandals involve popular televangelists, including Jim Bakker, Oral Roberts, and Jimmy Swaggart. During a visit to Berlin, Germany, President Reagan challenges Soviet General Secretary Mikhail Gorbachev to "Tear down this wall!" (referring to the Berlin Wall). The Dow Jones Industrial Average falls 22.6% in a single session on Black Monday. Dennis Conner, on board the challenger boat Stars & Stripes, returns the America's Cup to America. The Intermediate-Range Nuclear Forces Treaty is signed in Washington, D.C. by President Reagan and Soviet Premier Gorbachev.
1987 November 22– An unidentified man wearing the Max Headroom mask appears out of nowhere on television stations WGN-TV and WTTW in Chicago. It is to this day the most notorious television broadcast interruption. As of 2019, the mystery is still unsolved, However, many people on Reddit claim they were behind the crime.
1988 – Drunk driving awareness is raised after a drunk driver's car crashes into a church bus near Carrollton, Kentucky, killing 27. Severe droughts and massive heat wave gripping the Midwest and Rocky Mountain states. The crisis reaches its peak with the Yellowstone fires of 1988. Wrigley Field in Chicago, Illinois, becomes the last Major League Baseball park to add lights for night games. Discovery is launched as first post-Challenger Space Shuttle flight. U.S. presidential election, 1988: George H. W. Bush is elected president, Dan Quayle vice president. The Intermediate-Range Nuclear Forces Treaty goes into effect.
1989 – Bush was sworn in as the 41st President, Quayle as Vice President. Time Inc. and Warner Communications announce plans for a merger, forming Time Warner. The tanker Exxon Valdez oil spill in Alaska's Prince William Sound, dumping 10.8 million US gallons of oil into pristine wildlife habitat. Awareness of stalking is raised with the murder of actress Rebecca Schaeffer by an obsessed fan. Hurricane Hugo strikes the Caribbean and U.S. Southeast Coast, causing $7 billion in damage. The 1989 Loma Prieta earthquake kills 63 in the greater San Francisco Bay Area. The quake occurs in the midst of Game 3 of the 1989 World Series, caught live on television broadcasts by ABC. President Bush declares a "War on Drugs." The animated television sitcom The Simpsons debuts on Fox. President Bush and Soviet Premier Gorbachev release statements indicating that the Cold War between their nations may be coming to an end. Symbolic elsewhere around the world was the fall of the Berlin Wall in Germany.
1990 — Hubble Space Telescope launched during STS-31, a Space Shuttle Discovery mission.
1991 — The Gulf War is waged in the Middle East, by a U.N.-authorized coalition force from thirty-four nations, led by the U.S. and United Kingdom, against Iraq. The World Wide Web publicly debuts as an Internet service. The Cold War ends as the USSR is dissolved.
1992 — Los Angeles riots result in over 60 deaths and $1 billion in damage, spurred by the acquittal of four Los Angeles Police Department officers accused in the videotaped beating of black motorist Rodney King. Hurricane Andrew, a Category 5 hurricane, kills 65 people and causes $26 billion in damage to Florida and other areas of the U.S. Gulf Coast, and will be the costliest natural disaster until Hurricane Katrina in 2005. Hurricane Iniki is the strongest hurricane ever to hit Hawaii. U.S. presidential election, 1992: Bill Clinton elected president, Al Gore was elected president.
1993 — Bill Clinton becomes the 42nd President, Al Gore becomes Vice President. A truck bomb explodes in the parking garage under the World Trade Center in New York City, killing six people and injuring over a thousand. Branch Davidians standoff and fire near Waco, Texas, resulting in the deaths of 81 people including their leader, David Koresh. The "Storm of the Century" strikes the Eastern Seaboard, with blizzard conditions and severe weather, killing 300 people and causing $6 billion in damage. Massive flooding along the Mississippi and Missouri Rivers kill 50 people and devastate the Midwest with $15–$20 billion in damage. President Clinton signs 'Don't ask, don't tell' into law which prohibits openly gay or bisexual people from serving in the military.
1994 — North American Free Trade Agreement goes in effect. 1994 Northridge earthquake kills 72 and injures 9,000 in the Los Angeles area and causes $20 billion in damage. Former Arkansas state employee Paula Jones accuses President Clinton of sexual harassment. The United States hosts the FIFA World Cup which is won by Brazil
1995 — Oklahoma City bombing kills 168 and wounds 800. The bombing is the worst domestic terrorist incident in U.S. history, and the investigation results in the arrests of Timothy McVeigh and Terry Nichols. Retired professional football player O. J. Simpson is acquitted of two charges of first-degree murder in the 1994 slayings of his ex-wife, Nicole Brown Simpson, and Ronald Goldman. The nine-month trial receives worldwide publicity. A heat wave kills 739 in Chicago, bringing to attention the plight of the urban poor and the elderly in extreme weather conditions.
1995-1996 — A budget crisis forces the federal government to shut down for several weeks.
1996 — TWA Flight 800 explodes off Long Island killing all 230 aboard. Khobar Towers bombing leaves 19 U.S. servicemen dead in Saudi Arabia. Centennial Olympic Park bombing at Summer Olympics in Atlanta kills 1 and injures 111. U.S. presidential election, 1996: Bill Clinton is re-elected president, Al Gore is re-elected vice president.
1997 — President Clinton and Vice President Gore begin their second terms. Sparked by a global economic crisis scare, the Dow Jones Industrial Average follows world markets and plummets 554.26, or 7.18%, to 7,161.15.
1998-1999 — Clinton-Lewinsky scandal: President Clinton is accused of having a sexual relationship with 22-year-old White House intern Monica Lewinsky. This leads to the impeachment of Clinton later in the year by the U.S. House of Representatives. Clinton is acquitted of all impeachment charges of perjury and obstruction of justice in a 21-day Senate trial.
1999 — The Dow Jones Industrial Average closes above the 10,000 mark for the first time, at 10,006.78. Teenage students Eric Harris and Dylan Klebold murder 13 other students and teachers at Columbine High School, sparking an international debate on gun control and bullying. A violent tornado outbreak in Oklahoma kills 50 people and becomes the first to produce a tornado that causes $1 billion in damage. The first officer deliberately crashes EgyptAir Flight 990 south of Nantucket, Massachusetts, killing 217. Along with the rest of the world, the U.S. prepares for the possible effects of the Y2K bug in computers, which was feared to cause computers to become inoperable and wreak havoc. The problem isn't as large as theorized, preparations are successful, and disaster is averted.
2000 — The Arleigh Burke-class destroyer, the USS Cole (DDG-67) is bombed in Yemeni waters, killing seventeen U.S. Navy sailors. U.S. presidential election, 2000: Initial result inconclusive and the result in Florida is disputed. George W. Bush is certified president after a Supreme Court ruling. Vice President Al Gore wins the nationwide popular vote but loses the electoral college.
2001 — George W. Bush becomes the 43rd President, Dick Cheney becomes Vice President. Democrats gain narrow control of Senate after James Jeffords defects from the Republican Party. No Child Left Behind Act education reform bill passed. Economic Growth and Tax Relief Reconciliation Act of 2001 institutes large tax cuts. September 11 attacks; 19 terrorists hijack four planes and crash them into the World Trade Center, the Pentagon, and a field in Shanksville, Pennsylvania killing nearly 3,000 people and injuring over 6,000; All civilian air traffic is suspended for three days, the first time an unplanned suspension had occurred in U.S. history. Congress passes an emergency bailout package for the airline industry as a result of the attacks. Anthrax attacks kill 5 and infect a further 17 through the U.S. Mail system. The United States launches the invasion of Afghanistan marking the start of Operation Enduring Freedom. Patriot Act, increasing law enforcement agencies' ability to conduct searches in cases of suspected terrorism. Agencies were enforced. American Airlines Flight 587 crashes in Queens, New York, killing 265.
2002 — The Department of Homeland Security is created in the wake of the September 11 attacks. The United States withdraws from Anti-Ballistic Missile Treaty. 10 people are killed and 3 are injured in the Beltway sniper attacks around the Washington D.C. area.
2003 — Republicans retake narrow control of the Senate following 2002 elections. Space Shuttle Columbia disintegrates upon re-entry to the Earth's atmosphere, killing all seven astronauts and resulting in a 29-month suspension of the Space Shuttle program. A series of incidents occur that institute a crackdown on building, fire, and safety code violations across the United States, including the E2 nightclub stampede which killed 21, The Station nightclub fire which killed 100, and a porch collapse which killed 13. The United States, United Kingdom, Australia and Poland invades Iraq marking the start of Operation Iraqi Freedom. U.S. forces continue fighting an insurgency in Iraq while helping the Iraqis build a new army of their own and develop a democratic form of government. In Iraq, deposed Iraqi president Saddam Hussein is captured by U.S. special forces.
2004 — The social networking website Facebook is launched. The 2004 Atlantic hurricane season produces four deadly and damaging hurricanes which impact Florida, Charley, Frances, Ivan, and Jeanne, which kill a combined 100 people in the U.S. and produce over $50 billion in damage. Massachusetts becomes the first state to legalize same-sex marriage in compliance with a ruling from the state's Supreme Court ruling in Goodridge v. Department of Public Health. Former U.S. President Ronald Reagan dies from complications resulting from Alzheimer's disease. He lies in state at the U.S. Capitol building before being interred. George W. Bush is re-elected president, Dick Cheney is re-elected vice president.
2005 — President Bush and Vice President Cheney begin their second terms. Hurricane Katrina devastates the Louisiana, Mississippi, and Alabama coastlines killing at least 1,836 people and causing $81 billion in damage, making it the costliest natural disaster in U.S. history. Weeks later, Hurricane Rita causes $10 billion damage along the Louisiana and Texas coastlines. In October, Hurricane Wilma kills 35 and causes $20 billion in damage in Florida.
2006 — The Democratic Party retakes control of both houses of Congress, and gains a majority of state governorships (28-22).
2007 — Democrat Nancy Pelosi becomes the first female Speaker of the U.S. House of Representatives. George W. Bush orders a troop surge which substantially increases the number of U.S. troops in Iraq and ultimately leads to reductions in casualties and major victories for coalition and Iraqi forces, against the insurgency. A South Korean student shoots and kills 32 other students and professors in the Virginia Tech massacre before killing himself. It stands as the worst mass shooting in U.S. history until 2016 and spurs a series of debates on gun control and journalism ethics. The I-35W Mississippi River bridge in Minneapolis, Minnesota collapses, killing 13 people. The bridge collapse brings to national attention the need to rehabilitate the aging U.S. infrastructure system. The late-2000s recession officially begins in December.
2008 — The Super Tuesday tornado outbreak kills over 60 people and produces $1 billion in damage across Arkansas, Kentucky, Tennessee, and Alabama. A student kills five, injures 21, and then kills himself in the Northern Illinois University shooting. After this incident, calls are made for more focus on mental health services and interest grows substantially in the group Students for Concealed Carry on Campus. Hurricane Ike kills 100 people along the Texas coast, produces $31 billion in damage, and contributes to rising oil prices. U.S. oil prices hit a record $147 per barrel in the wake of—among other factors—international tensions and the falling U.S. dollar vs. the Euro. A global financial crisis begins as the stock market crashes. In response, U.S. President George W. Bush signs the revised Emergency Economic Stabilization Act into law to create a 700 billion dollar Treasury fund to purchase failing bank assets. U.S. presidential election, 2008: Barack Obama is elected president, and Joe Biden vice president.
2009 — Barack Obama becomes the 44th President, Joe Biden becomes Vice President. Obama is the first African-American to hold the office. The first of a series of Tea Party protests are conducted across the United States, focusing on smaller government, fiscal responsibility, individual freedoms and conservative views of the Constitution. U.S. President Barack Obama obtains Congressional approval for the $787 billion stimulus package, the largest since President Dwight D. Eisenhower. Pop icon Michael Jackson dies, creating the largest public mourning for an entertainer since the death of Elvis Presley. Nidal Hasan kills 12 servicemen and injures 31 in the 2009 Fort Hood shooting.
2010 – Instagram founded. The Deepwater Horizon oil rig in the Gulf of Mexico explodes, spilling millions of gallons of oil into the sea. The spill becomes the worst oil spill in American history. In the 2010 Midterm elections, the Republicans retake the House of Representatives as the Democrats lose 63 seats.
2011 – U.S. Representative Gabrielle Giffords is severely wounded in an assassination attempt when a gunman went on a shooting spree, killing federal judge John Roll and five other people, and wounding at least 13 others, at an event Giffords was hosting in suburban Tucson, Arizona. The ATF gunwalking scandal emerged, wherein thousands of guns were allowed to "walk" through interdiction to Mexico, supposedly to aid in the capture of criminals. A series of tornadoes cause heavy damage in the South, Alabama being the hardest hit. 324 people are killed in the deadliest American natural disaster since Hurricane Katrina. Osama bin Laden, leader of al-Qaeda and mastermind of the September 11 attacks, is killed in Abbottabad, Pakistan, by U.S. Navy SEALs. Flooding devastates the Mississippi River valley causing $2 to $4 billion in damage. A tornado devastates Joplin, Missouri, killing 158 and injuring over 1,000, making it the deadliest single U.S. tornado since the advent of modern weather forecasting. Casey Marie Anthony is acquitted of all charges related to her death of her daughter, Caylee; she was convicted of four counts of providing false information to a law enforcement officer. She was released a week later because of credit for time served. STS-135: The Space Shuttle Atlantis touches down at the Shuttle Landing Facility at Kennedy Space Center, ending the 30-year shuttle program, which began with the launch of Space Shuttle Columbia on April 12, 1981.
2012 – A gunman kills 12 and injures 70 at a movie theater in Aurora, Colorado. A gunman kills 26, including 20 children, at the Sandy Hook Elementary School in Newtown, Connecticut. Hurricane Sandy strikes the Eastern Seaboard.
2012 November 6– U.S. presidential election, 2012: Barack Obama reelected president, Joe Biden reelected vice president.
2013 – President Obama and Vice President Biden begin their second terms. Christopher Dorner murders three people in Southern California, starting the largest manhunt in Los Angeles history. His spree ends in Big Bear Lake, California where he barricades himself in a cabin, kills a second officer, before committing suicide. Edward Snowden leaks highly classified documents from the National Security Agency. Terrorists attack the Boston Marathon by detonating two bombs at the finishing line of the race, killing three and injuring 283 runners and spectators; Suspects Tamerlan and Dzhokhar Tsarnaev then led Boston police on a high-speed chase, killing one officer at the Massachusetts Institute of Technology; Tamerlan was killed in a shootout with police and Dzhokhar was detained the day after. A tornado devastates suburbs near Oklahoma City, killing 24. The most destructive wildfire in Colorado history burns nearly 16,000 acres and kills two people. The Supreme Court strikes down the Defense of Marriage Act, which banned the federal recognition of same-sex marriages and refused to recognize the legal standing of proponents of Proposition 8, which resulted in the re-legalization of same-sex marriage in California. Black Lives Matter emerges as a political movement, protesting against what it sees as widespread racial profiling, police brutality, and racial inequality in the United States criminal justice system.
2014 – A grand jury decides not to charge Officer Darren Wilson in the shooting death of Michael Brown inciting protests and riots against racism and police brutality in the St. Louis area Causing riot. The Republicans win the Senate in the Midterm elections.
2015 – Dzhokhar Tsarnaev is convicted and sentenced to death for committing the Boston Marathon bombing. Dylann Roof kills 9 people during a Bible study at the Emanuel African Methodist Episcopal Church in Charleston, South Carolina. Same-sex marriage is legalized in all 50 US states. Rizwan Farook and Tashfeen Malik carried out an attack at the Inland Regional Center in San Bernardino, California, killing 14 and seriously injuring 22 others.
2016 – Omar Mateen kills 49 people and injures 58 members of the LGBT community at the Pulse nightclub. 36 people are killed in the Oakland Warehouse Fire
2016 November 8– U.S. presidential election, 2016: Donald Trump elected president, Mike Pence elected vice president
2017 Film producer Harvey Weinstein is accused of sexual harassment in a New York Times expose, marking the beginning of the Me Too movement.
2017 January 6– Fort Lauderdale airport shooting. Donald Trump becomes the 45th president, Mike Pence becomes Vice President. Trump is the first person without prior military or government service to hold the office. Trump fires FBI director James Comey, precipitating the Mueller investigation. Relations between the U.S. and the U.N. and North Korea strain after the country tested missiles in various places.
2017 April– The United States drops missiles and bombs on Syria.
2017 August 11-12– A white supremacist rally in Charlottesville, Virginia leads to three deaths and to the discussion about racism in modern American society. The term alt-right receives renewed popular consciousness.
2017 August – Hurricane Harvey makes landfall in the United States, flooding broad swaths of Texas and Louisiana and causing tens of billions of dollars of damage, making it one of the costliest natural disasters in U.S. history.
2017 September – Hurricane Irma makes landfall in Florida and causes tens of billions of dollars of damage. Irma also wrecks the Caribbean Islands. Hurricane Maria made landfall on Puerto Rico as a Category 5 hurricane, killing hundreds and knocking out the island's power.
2017 October 1– A gunman opens fire at a Las Vegas Strip concert, killing 60 people and injuring 867. This was the deadliest mass shooting in modern U.S. history.
2017 November 5– A gunman kills 26 people and wounds 22 others at a church in Sutherland Springs, Texas, before killing himself. This was the deadliest mass shooting in Texas history and the deadliest shooting in an American place of worship in modern history.
2018 February 14– A gunman kills 17 people and injures 17 at Marjory Stoneman Douglas High School in Parkland, Florida.
2018 – Donald Trump meets with North Korean leader Kim Jong-un in Singapore. The entire West Virginia Supreme court of Appeals is impeached. In the 2018 United States elections, the Democrats retake the House while the Republicans keep the Senate. Creator of SpongeBob SquarePants Stephen Hillenburg and Creative leader of Marvel Comics Stan Lee both die in November.
2018 November 30– Former U.S. President George H. W. Bush dies from complications resulting from Parkinson's disease. He lies in the state at the U.S. Capitol building before being interred.
2019 – All the works published in 1923 except for sound recordings (2022 scheduled events) enter the public domain in the United States. Mexican drug boss/lord Joaquín "El Chapo" Guzmán is found guilty on all ten counts at a drug-trafficking trial in New York. Supreme Court case Bucklew V. Precythe the Supreme Court ruled 5 to 4 that inmates on death row are not guaranteed "painless executions" under the Constitution
2019 January 1– Washington state bans all persons under 21 years of age from purchasing a semi-automatic rifle
2019 January 25– The longest government shutdown in American history (December 22, 2018 -January 25, 2019), or 35 days, officially ends.
2019 January 30– Large portions of the United States are hit with a polar vortex. The city of Chicago once again hit a record low: 27 degrees below zero. It occurred for fifty-two straight hours.
2019 February 1– President Donald Trump confirms that the U.S. will leave the Intermediate-range Nuclear Forces Treaty.
2019 February 22– Singer R. Kelly charged with ten counts of aggravated criminal sexual abuse for incidents dating back as far as the year 1998.
2019 February 27– 2019 North Korea – United States Hanoi Summit held in Vietnam. It is the second summit between U.S. President Donald Trump and North Korean leader Kim Jong-un.
2019 March 26 – Vice President Mike Pence orders NASA to fly Americans to the Moon within the next five years, using either government or private carriers.
2019 April 4– The 1973 War Powers Act Resolution is invoked for the first time when the House of Representatives votes 247–175 to end U.S. military assistance in Saudi Arabia in its intervention in the Yemeni Civil War.
2019 April – The first image of a black hole is taken. James Earl Carter Jr. becomes the longest ever living U.S. president at 94 years old, following the death of George H. W. Bush in December 2018.
2019 April 22– Avengers Endgame is released, going on to become the highest-grossing movie of all time.
2019 April 27– A gunman kills one and injures three in a California Synagogue. The suspect is white supremacist John Timothy Earnest, who was 19 years old at the time.
2019 May 31– A city employee for Virginia Beach entered a municipal building with a gun and kills 12 people.
2019 June 8– President Trump reached an agreement with Mexico to avoid tariffs.
2019 June 9 – A construction crane fell on an apartment complex in Dallas, killing 1 person and injuring 6.
2019 June 14– One person died and two more were injured after a gunman entered a Costco in Southern California.
2019 July 26– The Supreme Court ruled to give President Trump $2.5 billion to fund his wall. The court ruled in a 5–4 vote.
2019 August 3– 23 people are killed and another 23 are injured in a mass shooting at a Walmart in El Paso, Texas.
2019 August 4– A gunman opened fire on a bar in Dayton, Ohio. He killed nine people and injured another 27.
2019 August 10– Financier and convicted sex offender Jeffrey Epstein is found dead in his prison cell under mysterious circumstances. It was declared a suicide by hanging, although the ruling is widely disputed.
2019 August 12 – An anonymous whistleblower filed a complaint against Donald Trump and Rudy Giuliani, claiming that the two sought foreign intervention in the 2020 presidential election. This complaint would lead to an investigation into the Trump-Ukraine scandal.
2019 September 24– Speaker of the House Nancy Pelosi announces the House of Representatives would begin an impeachment inquiry against Donald Trump.
2019 December 18 -The U.S. House of Representatives impeaches President Trump for high crimes and misdemeanors.
2020 January 21– The first patient in the United States is diagnosed with coronavirus.
2020 January 26– Kobe Bryant, along with his daughter and 7 others, perished in a helicopter crash.
2020 February 5– The majority of the United States Senate voted to acquit Donald Trump of charges related to the Trump-Ukraine scandal.
2020 February 26– 6 people are killed in a mass shooting in Milwaukee, Wisconsin, before the perpetrator killed himself.
2020 March 11– The World Health Organization officially declares COVID-19 a global pandemic.
2020 May 25– George Floyd, an African-American man living in Minneapolis, was killed during an arrest. Subsequently, nationwide protests and riots ensued.
2020 August 28, - Actor Chadwick Boseman pass away from Colon Cancer.
2020 October 2– President Donald Trump and First Lady Melania Trump are diagnosed with COVID-19. The former is taken to Walter Reed hospital.
2020 November 7– U.S. presidential election, 2020: Four days after election day, former Vice President Joe Biden is elected the 46th president, defeating Donald Trump. Biden's running mate, Kamala Harris, is elected the 49th vice president, becoming the first woman, the first African-American, and the first Asian-American to hold that office.
2020 December 14– The first shots of the Pfizer COVID-19 vaccine are given out.
2021 January 6– Trump-supporting rioters storm the United States Capitol, forcing Congress to evacuate and interrupting the Electoral College vote count that certified Joe Biden's victory.
2021 January 13– Trump becomes the only president to be impeached for a second time. Ten Republicans joined Democrats in voting to impeach Trump.
2021 January 20– Joe Biden becomes the 46th president and Kamala Harris vice president. Harris is the first woman to hold a national elective office.
2021 February 13– Donald Trump is acquitted by the Senate in his second impeachment trial.[1]
2021 March 16– A spa shooting in Atlanta leaves 8 dead; 6 of the victims were of Asian descent.
2021 March 22– Ten people are killed in a mass shooting at a King Soopers location in Boulder, Colorado. This is the second mass shooting with at least 8 dead in a week.
2021 June 24— A condominium in Miami collapses.
`
  .replace(/\[\d\]/g,"")
  .replace(/\"/g,"'")
  .replace( /\s*(\d*)\s*(January|February|March|April|May|June|July|August|September|October|November|December)*(\s*\d*)\s*[-_–]\s*(.*)[\.\n]/g, '"$1 $2 $3":"$4",\n')
  .replace(/\"(\d+)\s+\"/g,`"$1"`)
  .replace(/\s\s/g," ")
  console.log(log2)

  // If followed by a number, doesn’t count. If followed by Inc, or followed by [A-Z]


useEffect(()=>{
  if(!allShelves){return}
      if(!shelfQuery){
        setShelfResults(allShelves)
      }
      setShelfResults(allShelves.filter((shelf)=>{return shelf[0].toLowerCase().indexOf(shelfQuery.toLowerCase())>=0}))

},[shelfQuery,allShelves])

const setNewShelf = (shelf) =>{
  setBookNumber('0')
  setShelfId(shelf[3]);
  setShelfTitle(shelf[0]);
  setColumnFocus("shelfpanel")
}


  return (
    <div style={{color:"var(--searchpaneltext)"}}>
    <div style={{display:"flex",
    flexDirection: "row",width:"100%",height:"var(--panelheight)"}}>
    <div style={{width:"calc(100% - 6rem)",display:columnFocus==="detailspanel"?"none":"flex",margin:"0 0 0 2rem",
    flexDirection: "column"}}>
      <div style={{height:"minmax(150px,30vh)"}}>
       <label htmlFor="languageSetting">search language:</label>
       <select className="form-control" id="languageSetting" value={languageSetting}
        onChange={(e)=>setLanguageSetting(e.target.value)} placeholder="toggles auto input settings">
        <option value="en">English</option>
        <option value="zh-tw">Traditional Chinese</option>
        <option value="zh-cn">Simplified Chinese</option>
        </select>

        <input className="form-control" type="text" id="shelfQuery" value={shelfQuery}
         onChange={(e)=>setShelfQuery(e.target.value)}/>
         </div>
         <div className="noScrollBar" style={{overflowY:"auto"}}>
{shelfResults && shelfResults.map((shelf)=><div onClick={()=>{setNewShelf(shelf)}} className="transition" key={shelf[3]}
style={{cursor:shelf[3]===shelfId?"":"pointer",color:"searchpaneltext", width:"minmax(auto,30vw)", backgroundColor:shelf[3]===shelfId?"white":"var(--searchpanellist)",
border:shelf[3]===shelfId?"1px solid var(--searchpanellstborderpressed)":"1px solid var(--searchpanellistborder)",
boxShadow:"var(--heavyshadow)",
margin:"1rem 0 0 0", padding:"0.6rem 1rem"}}>
  <div style={{fontFamily:'Jost', fontWeight:shelf[3]===shelfId?"500":"400",fontSize:shelf[3]===shelfId?"1.35rem":"1.25rem",
  textTransform: "capitalize", letterSpacing:"0.01rem"}}>
{shelf[0]}
  </div>
  <div>
  {shelf[2].map((tag)=>{
  return <p className="tag" key={tag.slice(2)} style={{display:"inline-block", margin:"0 0.5rem 0.5rem 0", padding:"0.1rem 0.1rem"}}>{tag.slice(2)}</p>
  })}
  </div>
</div>)}
</div>

    </div>
    <h5 className="tab-lr h5tab tabsearch" style={{opacity:"0.8",cursor:columnFocus!=="shelfpanel"?"pointer":""}} onClick={()=>{if(columnFocus==="init"){return;}else{setColumnFocus("shelfpanel")}}}>
    <span>{shelfTitle.slice(0,35)}</span>
    {columnFocus!=="shelfpanel"&&
    <span className="subtitle2" style={{textTransform: "none"
,position:"absolute", bottom:"0"}}>expand <AddCircleIcon style={{alignSelf:"center",width:"1rem",height:"1rem"}}/></span>}
    </h5>
    </div>
    </div>


  )
}

export default SearchForm
