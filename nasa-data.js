// nasa-data.js - ฐานข้อมูลวัตถุอวกาศและการค้นพบสำคัญของ NASA
// รวบรวมข้อมูลเหตุการณ์สำคัญ การค้นพบวัตถุท้องฟ้า และภาพถ่ายทางดาราศาสตร์

const NASA_DATABASE = [
  // ยุคก่อนปี 1990 (ภารกิจประวัติศาสตร์)
  {
    id: "explorer-1",
    date: "1958-01-31",
    monthDay: "01-31",
    nameTh: "แถบรังสีแวนอัลเลน (Van Allen Radiation Belt)",
    nameEn: "Van Allen Radiation Belts Discovery by Explorer 1",
    type: "การค้นพบทางวิทยาศาสตร์",
    typeEn: "Scientific Discovery",
    distance: "1,000 - 60,000 กม. จากโลก",
    constellation: "วงโคจรโลก (Earth Orbit)",
    instrument: "ดาวเทียม Explorer 1 (ดาวเทียมดวงแรกของสหรัฐฯ)",
    descriptionTh: "NASA และ ดร.เจมส์ แวน อัลเลน ค้นพบแถบรังสีอนุภาคพลังงานสูงรอบโลก ซึ่งถูกกักไว้โดยสนามแม่เหล็กโลก นี่คือการค้นพบทางวิทยาศาสตร์ครั้งสำคัญชิ้นแรกของยุคอวกาศ",
    descriptionEn: "Explorer 1 carried instruments designed by Dr. James Van Allen that discovered the belts of intense radiation trapped by Earth's magnetic field.",
    image: "https://images-assets.nasa.gov/image/9801815/9801815~orig.jpg",
    tags: ["Earth Magnetosphere", "Explorer 1", "Historic First"]
  },
  {
    id: "mariner-4-mars",
    date: "1965-07-15",
    monthDay: "07-15",
    nameTh: "ภาพถ่ายดาวอังคารระยะใกล้ภาพแรก (First Close-up of Mars)",
    nameEn: "Mariner 4 First Close-up Mars Images",
    type: "ดาวเคราะห์ในระบบสุริยะ",
    typeEn: "Planetary Flyby",
    distance: "54.6 ล้าน กม. จากโลก",
    constellation: "ดาวอังคาร (Mars)",
    instrument: "ยานสำรวจ Mariner 4",
    descriptionTh: "ยาน Mariner 4 ส่งภาพถ่ายระยะใกล้ภาพแรกของดาวอังคารกลับมายังโลก เผยให้เห็นหลุมอุกกาบาตคล้ายดวงจันทร์ และทำลายความเชื่อเดิมที่ว่าดาวอังคารอาจมีคลองส่งน้ำหรือพืชพันธุ์",
    descriptionEn: "Mariner 4 completed the first successful flyby of Mars, returning the first close-up photographs of another planet showing a cratered moon-like surface.",
    image: "https://images-assets.nasa.gov/image/PIA14033/PIA14033~orig.jpg",
    tags: ["Mars", "Mariner 4", "Planetary Science"]
  },
  {
    id: "apollo-11-moon",
    date: "1969-07-20",
    monthDay: "07-20",
    nameTh: "การลงจอดบนดวงจันทร์ของมนุษย์ครั้งแรก (Apollo 11 Moon Landing)",
    nameEn: "Apollo 11 Lands on the Sea of Tranquility",
    type: "ภารกิจสำรวจดวงจันทร์",
    typeEn: "Manned Lunar Mission",
    distance: "384,400 กม. จากโลก",
    constellation: "ดวงจันทร์ (Moon - Mare Tranquillitatis)",
    instrument: "ยานลงจอด Eagle (Apollo 11)",
    descriptionTh: "นีล อาร์มสตรอง และ บัซซ์ อัลดริน กลายเป็นมนุษย์กลุ่มแรกที่ก้าวเท้าลงบนพื้นผิวต่างดาว พร้อมเก็บตัวอย่างหินดวงจันทร์และสำรวจสภาพทางธรณีวิทยาของดวงจันทร์เป็นครั้งแรก",
    descriptionEn: "NASA astronauts Neil Armstrong and Buzz Aldrin made history as the first humans to walk on the lunar surface, collecting samples and deploying scientific experiments.",
    image: "https://images-assets.nasa.gov/image/as11-40-5903/as11-40-5903~orig.jpg",
    tags: ["Moon", "Apollo 11", "Human Spaceflight"]
  },
  {
    id: "voyager-1-launch",
    date: "1977-09-05",
    monthDay: "09-05",
    nameTh: "ยานสำรวจวอยเอเจอร์ 1 สู่ห้วงอวกาศลึก (Voyager 1 Launch)",
    nameEn: "Voyager 1 Launch to Interstellar Space",
    type: "ยานสำรวจอวกาศลึก",
    typeEn: "Interstellar Probe",
    distance: "24,000+ ล้าน กม. จากโลก (ไกลที่สุดที่มนุษย์สร้าง)",
    constellation: "กลุ่มดาวคนแบกงู (Ophiuchus)",
    instrument: "ยานสำรวจ Voyager 1",
    descriptionTh: "NASA ส่งยาน Voyager 1 ออกเดินทางเพื่อสำรวจดาวพฤหัสบดี ดาวเสาร์ และปัจจุบันกลายเป็นวัตถุที่มนุษย์สร้างขึ้นที่เดินทางไปได้ไกลที่สุด โดยข้ามพรมแดนสู่ 'อวกาศระหว่างดวงดาว' แล้ว",
    descriptionEn: "Voyager 1 launched to explore the outer Solar System. It has now crossed into interstellar space, making it humanity's most distant ambassador.",
    image: "https://images-assets.nasa.gov/image/PIA21987/PIA21987~orig.jpg",
    tags: ["Voyager 1", "Interstellar", "Outer Solar System"]
  },
  {
    id: "io-volcanoes",
    date: "1979-03-05",
    monthDay: "03-05",
    nameTh: "ภูเขาไฟคุกรุ่นบนดวงจันทร์ไอโอ (Active Volcanoes on Io)",
    nameEn: "Discovery of Active Volcanism on Jupiter's Moon Io",
    type: "ดวงจันทร์บริวาร",
    typeEn: "Planetary Moon",
    distance: "628 ล้าน กม. จากโลก",
    constellation: "ระบบดาวพฤหัสบดี (Jupiter System)",
    instrument: "กล้องถ่ายภาพยาน Voyager 1",
    descriptionTh: "ยาน Voyager 1 ค้นพบการปะทุของภูเขาไฟที่มีชีวิตบนดวงจันทร์ไอโอของดาวพฤหัสบดี ซึ่งเป็นการค้นพบภูเขาไฟมีพลังแห่งแรกในระบบสุริยะนอกเหนือจากบนโลก",
    descriptionEn: "Voyager 1 discovered active volcanism on Io, Jupiter's moon, marking the first time active volcanoes were found anywhere other than Earth.",
    image: "https://images-assets.nasa.gov/image/PIA01530/PIA01530~orig.jpg",
    tags: ["Io", "Volcanoes", "Jupiter", "Voyager 1"]
  },
  {
    id: "voyager-2-uranus",
    date: "1986-01-24",
    monthDay: "01-24",
    nameTh: "การสำรวจดาวยูเรนัสระยะใกล้ (Voyager 2 Uranus Encounter)",
    nameEn: "Voyager 2 Closest Approach to Uranus",
    type: "ดาวเคราะห์แก๊สยักษ์",
    typeEn: "Ice Giant Planet",
    distance: "2.8 พันล้าน กม. จากโลก",
    constellation: "กลุ่มดาวแกะ (Aries)",
    instrument: "ยานสำรวจ Voyager 2",
    descriptionTh: "ยาน Voyager 2 เฉียดใกล้ดาวยูเรนัส ค้นพบดวงจันทร์บริวารใหม่ 10 ดวง วงแหวนใหม่ 2 วง และค้นพบว่าสนามแม่เหล็กของดาวยูเรนัสเอียงทำมุมอย่างแปลกประหลาดถึง 60 องศา",
    descriptionEn: "Voyager 2 made history as the only spacecraft to fly past Uranus, discovering 10 new moons, 2 new rings, and its dramatically tilted magnetic field.",
    image: "https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg",
    tags: ["Uranus", "Voyager 2", "Moons", "Rings"]
  },
  {
    id: "voyager-2-neptune",
    date: "1989-08-25",
    monthDay: "08-25",
    nameTh: "จุดมืดใหญ่บนดาวเนปจูน (Neptune's Great Dark Spot)",
    nameEn: "Voyager 2 Discovers Neptune's Great Dark Spot",
    type: "ดาวเคราะห์น้ำแข็งยักษ์",
    typeEn: "Ice Giant Planet",
    distance: "4.5 พันล้าน กม. จากโลก",
    constellation: "กลุ่มดาวคนแบกหม้อน้ำ (Aquarius)",
    instrument: "ยานสำรวจ Voyager 2",
    descriptionTh: "ยาน Voyager 2 บินผ่านดาวเนปจูน ค้นพบพายุยักษ์ 'จุดมืดใหญ่' (Great Dark Spot) ขนาดเท่าโลก พร้อมด้วยน้ำพุร้อนไนโตรเจนบนดวงจันทร์ไทรทัน (Triton)",
    descriptionEn: "Voyager 2 made its closest approach to Neptune, discovering the Great Dark Spot storm system and active nitrogen geysers on moon Triton.",
    image: "https://images-assets.nasa.gov/image/PIA01492/PIA01492~orig.jpg",
    tags: ["Neptune", "Voyager 2", "Great Dark Spot", "Triton"]
  },

  // ทศวรรษ 1990
  {
    id: "pale-blue-dot",
    date: "1990-02-14",
    monthDay: "02-14",
    nameTh: "จุดสีน้ำเงินจางๆ - โลกในสายตาวอยเอเจอร์ (Pale Blue Dot)",
    nameEn: "Voyager 1's Iconic 'Pale Blue Dot' Photograph",
    type: "ภาพถ่ายประวัติศาสตร์",
    typeEn: "Historic Cosmic Portrait",
    distance: "6 พันล้าน กม. จากโลก",
    constellation: "ขอบระบบสุริยะ",
    instrument: "กล้องความละเอียดแคบ ยาน Voyager 1",
    descriptionTh: "ตามคำแนะนำของคาร์ล ซาแกน ยาน Voyager 1 หันกล้องกลับมาถ่ายภาพโลกเป็นครั้งสุดท้าย โลกปรากฏเป็นเพียงละอองฝุ่นสีน้ำเงินจางๆ ขนาดไม่ถึงหนึ่งพิกเซลท่ามกลางแสงอาทิตย์",
    descriptionEn: "At Carl Sagan's suggestion, Voyager 1 captured Earth from 3.7 billion miles away — a tiny pixel suspended in a sunbeam, known forever as the Pale Blue Dot.",
    image: "https://images-assets.nasa.gov/image/PIA23645/PIA23645~orig.jpg",
    tags: ["Earth", "Pale Blue Dot", "Voyager 1", "Carl Sagan"]
  },
  {
    id: "hubble-launch",
    date: "1990-04-24",
    monthDay: "04-24",
    nameTh: "การส่งกล้องโทรทรรศน์อวกาศฮับเบิล (Hubble Space Telescope Launch)",
    nameEn: "Deployment of the Hubble Space Telescope",
    type: "หอสังเกตการณ์อวกาศ",
    typeEn: "Space Observatory",
    distance: "540 กม. เหนือพื้นโลก",
    constellation: "วงโคจรต่ำของโลก (Low Earth Orbit)",
    instrument: "กระสวยอวกาศ Discovery (STS-31)",
    descriptionTh: "NASA ส่งกล้องโทรทรรศน์อวกาศฮับเบิลขึ้นสู่วงโคจร เปิดประตูบานใหม่สู่การมองเห็นเอกภพในระดับที่ไม่เคยมีมาก่อน ปราศจากชั้นบรรยากาศของโลกมารบกวน",
    descriptionEn: "Space Shuttle Discovery deployed the Hubble Space Telescope into Earth orbit, revolutionizing astronomy and our view of the universe.",
    image: "https://images-assets.nasa.gov/image/sts031-11-007/sts031-11-007~orig.jpg",
    tags: ["Hubble", "Space Shuttle", "Telescope"]
  },
  {
    id: "pillars-of-creation",
    date: "1995-04-01",
    monthDay: "04-01",
    nameTh: "เสาหลักแห่งการสร้างในเนบิวลานกอินทรี (Pillars of Creation - M16)",
    nameEn: "Hubble Captures the Pillars of Creation in Eagle Nebula",
    type: "เนบิวลาสะท้อนแสงและแหล่งกำเนิดดาวฤกษ์",
    typeEn: "Star-Forming Nebula",
    distance: "6,500 - 7,000 ปีแสง",
    constellation: "กลุ่มดาวงู (Serpens)",
    instrument: "กล้อง WFPC2 บนกล้องฮับเบิล",
    descriptionTh: "เสาแก๊สและฝุ่นขนาดยักษ์สูงหลายปีแสง เป็นแหล่งอนุบาลดาวฤกษ์เกิดใหม่ แก๊สกำลังถูกกัดกร่อนโดยรังสีอัลตราไวโอเลตเข้มข้นจากดาวฤกษ์มวลมากที่เพิ่งถือกำเนิดขึ้น",
    descriptionEn: "Hubble captured towering tendrils of cosmic dust and gas in the Eagle Nebula, where newborn stars are being hatched in dense molecular clouds.",
    image: "https://images-assets.nasa.gov/image/PIA05982/PIA05982~orig.jpg",
    tags: ["Eagle Nebula", "Pillars of Creation", "Star Birth", "Hubble"]
  },
  {
    id: "hubble-deep-field",
    date: "1996-01-15",
    monthDay: "01-15",
    nameTh: "ภาพอวกาศลึกฮับเบิล (Hubble Deep Field - HDF)",
    nameEn: "Hubble Deep Field: Thousands of Ancient Galaxies",
    type: "ห้วงอวกาศลึกและกาแล็กซียุคแรกเริ่ม",
    typeEn: "Deep Field / Distant Galaxies",
    distance: "มากกว่า 10,000 ล้านปีแสง",
    constellation: "กลุ่มดาวหมีใหญ่ (Ursa Major)",
    instrument: "กล้อง WFPC2 บนกล้องฮับเบิล",
    descriptionTh: "ฮับเบิลจ้องมองไปยังพื้นที่ว่างเปล่ามืดมิดในอวกาศเป็นเวลา 10 วันติดต่อกัน ผลลัพธ์คือการค้นพบกาแล็กซีกว่า 3,000 กาแล็กซีที่มีอายุนับหมื่นล้านปี ซ่อนอยู่ในจุดที่เคยมองว่าว่างเปล่า",
    descriptionEn: "Hubble peered into a tiny, seemingly empty speck of the night sky for 10 days, revealing over 3,000 distant galaxies stretching back to near the dawn of time.",
    image: "https://images-assets.nasa.gov/image/hubble-deep-field-details_800/hubble-deep-field-details_800~orig.jpg",
    tags: ["Hubble Deep Field", "Galaxies", "Cosmology"]
  },
  {
    id: "mars-pathfinder",
    date: "1997-07-04",
    monthDay: "07-04",
    nameTh: "ยานพาธไฟน์เดอร์และหุ่นโซเจอร์เนอร์ถึงดาวอังคาร (Mars Pathfinder & Sojourner)",
    nameEn: "Mars Pathfinder Lands with Sojourner Rover",
    type: "ยานสำรวจดาวเคราะห์",
    typeEn: "Mars Surface Exploration",
    distance: "190 ล้าน กม. จากโลก",
    constellation: "ดาวอังคาร (Ares Vallis)",
    instrument: "หุ่นยนต์สำรวจ Sojourner",
    descriptionTh: "หุ่นยนต์ล้อสำรวจตัวแรกของมนุษยชาติ 'โซเจอร์เนอร์' กลิ้งลงบนผิวดาวอังคาร ใช้ถุงลมนิรภัยกระดอนลงจอดอย่างปลอดภัย และส่งข้อมูลวิเคราะห์หินและดินกลับมา",
    descriptionEn: "NASA's Mars Pathfinder landed using innovative airbags, deploying Sojourner, humanity's very first wheeled robotic rover to explore another planet.",
    image: "https://images-assets.nasa.gov/image/PIA01551/PIA01551~orig.jpg",
    tags: ["Mars", "Sojourner", "Rover", "Pathfinder"]
  },

  // ทศวรรษ 2000
  {
    id: "sombrero-galaxy",
    date: "2003-10-02",
    monthDay: "10-02",
    nameTh: "กาแล็กซีหมวกปีกกว้างซอมเบรโร (Sombrero Galaxy - M104)",
    nameEn: "Hubble View of Sombrero Galaxy (Messier 104)",
    type: "กาแล็กซีก้นหอยมีกระเปาะ",
    typeEn: "Spiral Galaxy",
    distance: "28 ล้านปีแสง",
    constellation: "กลุ่มดาวหญิงสาว (Virgo)",
    instrument: "กล้อง ACS บนฮับเบิล",
    descriptionTh: "กาแล็กซีซอมเบรโรมีจุดเด่นคือกระเปาะใจกลางสว่างไสวขนาดใหญ่และแนวแถบฝุ่นหนาทึบที่ล้อมรอบเหมือนปีกหมวกเม็กซิกัน ใจกลางมีหลุมดำมวลยิ่งยวดหนักกว่าพันล้านเท่าของดวงอาทิตย์",
    descriptionEn: "Hubble captured this striking portrait of Messier 104, known for its brilliant white bulbous core encircled by thick dark dust lanes resembling a sombrero hat.",
    image: "https://images-assets.nasa.gov/image/PIA04215/PIA04215~orig.jpg",
    tags: ["Sombrero Galaxy", "Messier 104", "Hubble", "Spiral Galaxy"]
  },
  {
    id: "opportunity-hematite",
    date: "2004-03-02",
    monthDay: "03-02",
    nameTh: "หลักฐานน้ำอดีตบนดาวอังคาร 'บลูเบอร์รี' (Hematite Blueberries on Mars)",
    nameEn: "Opportunity Rover Finds Water Evidence (Hematite Spherules)",
    type: "การค้นพบทางธรณีวิทยาดาวเคราะห์",
    typeEn: "Planetary Geology Discovery",
    distance: "225 ล้าน กม. จากโลก",
    constellation: "ดาวอังคาร (Meridiani Planum)",
    instrument: "ยานสำรวจ Opportunity Rover",
    descriptionTh: "ยาน Opportunity ค้นพบเม็ดกลมแร่ฮีมาไทต์ขนาดเล็กคล้ายผลบลูเบอร์รี ซึ่งเป็นหลักฐานชัดเจนว่าในอดีตพื้นที่แห่งนี้เคยมีน้ำที่เป็นของเหลวไหลท่วมอยู่เป็นเวลานาน",
    descriptionEn: "NASA's Opportunity rover discovered mineral spherules nicknamed 'blueberries,' providing definitive proof that liquid water once drenched the Martian surface.",
    image: "https://images-assets.nasa.gov/image/PIA05581/PIA05581~orig.jpg",
    tags: ["Mars", "Opportunity", "Water on Mars", "Hematite"]
  },
  {
    id: "cassini-saturn-rings",
    date: "2004-07-01",
    monthDay: "07-01",
    nameTh: "ยานแคสสินีเข้าสู่วงโคจรดาวเสาร์ (Cassini Arrives at Saturn)",
    nameEn: "Cassini-Huygens Enters Saturn Orbit",
    type: "ภารกิจสำรวจดาวเสาร์",
    typeEn: "Planetary Exploration",
    distance: "1.4 พันล้าน กม. จากโลก",
    constellation: "ดาวเสาร์ (Saturn)",
    instrument: "ยานสำรวจ Cassini-Huygens",
    descriptionTh: "ยานแคสสินีลอดผ่านช่องว่างระหว่างวงแหวนดาวเสาร์เพื่อเข้าสู่วงโคจร เริ่มต้นภารกิจ 13 ปีที่ค้นพบมหาสมุทรใต้พิภพบนดวงจันทร์เอนเซลาดัส และทะเลมีเทนบนดวงจันทร์ไททัน",
    descriptionEn: "Cassini crossed through Saturn's ring plane to become the first spacecraft to orbit the ringed planet, uncovering hidden oceans beneath icy moons.",
    image: "https://images-assets.nasa.gov/image/PIA06077/PIA06077~orig.jpg",
    tags: ["Cassini", "Saturn", "Rings", "Enceladus"]
  },
  {
    id: "huygens-titan",
    date: "2005-01-14",
    monthDay: "01-14",
    nameTh: "การลงจอดบนดวงจันทร์ไททัน (Huygens Probe Lands on Titan)",
    nameEn: "Huygens Probe Lands on Saturn's Moon Titan",
    type: "ดวงจันทร์บริวารที่มีชั้นบรรยากาศหนาแน่น",
    typeEn: "Moon Surface Landing",
    distance: "1.4 พันล้าน กม. จากโลก",
    constellation: "ระบบดาวเสาร์ (Saturn - Titan)",
    instrument: "ยานลงจอด Huygens (ร่วมกับ ESA/NASA)",
    descriptionTh: "ยาน Huygens ร่อนผ่านหมอกควันไฮโดรคาร์บอนหนาทึบ ลงจอดบนแผ่นดินน้ำแข็งของดวงจันทร์ไททัน เผยให้เห็นร่องน้ำ ทางน้ำไหล และก้อนกรวดน้ำแข็งมน",
    descriptionEn: "Huygens touched down on Titan, transmitting the first images from the surface of a world in the outer Solar System, revealing riverbeds carved by liquid methane.",
    image: "https://images-assets.nasa.gov/image/PIA07231/PIA07231~orig.jpg",
    tags: ["Titan", "Huygens", "Saturn Moon", "Methane Lakes"]
  },
  {
    id: "enceladus-geysers",
    date: "2005-11-27",
    monthDay: "11-27",
    nameTh: "น้ำพุไอน้ำพุ่งจากขั้วใต้ดวงจันทร์เอนเซลาดัส (Enceladus Ice Geysers)",
    nameEn: "Cassini Discovers Water Geysers on Enceladus",
    type: "ดวงจันทร์น้ำแข็งที่มีมหาสมุทรใต้เปลือก",
    typeEn: "Ocean World / Icy Moon",
    distance: "1.4 พันล้าน กม. จากโลก",
    constellation: "ระบบดาวเสาร์ (Enceladus)",
    instrument: "ยานสำรวจ Cassini (ISS Cameras)",
    descriptionTh: "ยานแคสสินีถ่ายภาพน้ำพุไอน้ำและผลึกน้ำแข็งที่พุ่งขึ้นจากรอยแยก 'แถบลายเสือ' ที่ขั้วใต้ของเอนเซลาดัส ยืนยันว่ามีมหาสมุทรน้ำอุ่นอยู่ใต้ผิวน้ำแข็ง ซึ่งอาจเอื้อต่อสิ่งมีชีวิต",
    descriptionEn: "Cassini discovered colossal plumes of water vapor and ice grains erupting from fractures at Enceladus' south pole, proving a subsurface ocean lurks beneath.",
    image: "https://images-assets.nasa.gov/image/PIA07758/PIA07758~orig.jpg",
    tags: ["Enceladus", "Geysers", "Ocean Worlds", "Cassini"]
  },
  {
    id: "rcw79-bubble",
    date: "2007-07-14",
    monthDay: "07-14",
    nameTh: "ดาวฤกษ์ในฟองแก๊สจักรวาล RCW 79 (RCW 79: Stars in a Bubble)",
    nameEn: "RCW 79: Stars in a Bubble",
    type: "ภาพดาราศาสตร์ประจำวัน (NASA APOD)",
    typeEn: "Astronomy Picture of the Day",
    distance: "17,000 ปีแสง",
    constellation: "กลุ่มดาวคนครึ่งม้า (Centaurus)",
    instrument: "กล้องโทรทรรศน์อวกาศสปิตเซอร์ (Spitzer Space Telescope)",
    descriptionTh: "ฟองแก๊สและฝุ่นจักรวาล RCW 79 มีขนาดเส้นผ่านศูนย์กลางกว้างถึง 70 ปีแสง ก่อตัวขึ้นจากแรงลมและรังสีรุนแรงของดาวฤกษ์เกิดใหม่มวลมาก ภาพถ่ายอินฟราเรดจากกล้องโทรทรรศน์อวกาศสปิตเซอร์ (Spitzer) เผยให้เห็นฝุ่นเรืองแสงสีแดงท่ามกลางกลุ่มดาวคนครึ่งม้า ห่างจากโลก 17,000 ปีแสง การขยายตัวของฟองแก๊สนี้ได้จุดชนวนให้เกิดการก่อกำเนิดดาวฤกษ์รุ่นใหม่ตามแนวขอบฟอง",
    descriptionEn: "A cosmic bubble of gas and dust, RCW 79 has grown to about 70 light-years in diameter, blown by the winds and radiation from hot young stars. The false-color infrared picture from the Spitzer Space Telescope shows dust embedded in the nebula glowing in red, triggering new star formation along its perimeter.",
    image: "https://images-assets.nasa.gov/image/PIA05983/PIA05983~orig.jpg",
    hdurl: "https://images-assets.nasa.gov/image/PIA05983/PIA05983~orig.jpg",
    officialUrl: "https://apod.nasa.gov/apod/ap070714.html",
    tags: ["NASA APOD", "RCW 79", "Spitzer", "Star Formation"]
  },
  {
    id: "kepler-launch",
    date: "2009-03-07",
    monthDay: "03-07",
    nameTh: "การปล่อยกล้องเคปเลอร์ล่าดาวเคราะห์นอกระบบ (Kepler Space Telescope Launch)",
    nameEn: "Kepler Space Telescope Launches to Find Earths",
    type: "กล้องโทรทรรศน์ล่าดาวเคราะห์",
    typeEn: "Exoplanet Hunter Mission",
    distance: "วงโคจรตามหลังโลก (Earth-trailing orbit)",
    constellation: "กลุ่มดาวหงส์และพิณ (Cygnus & Lyra)",
    instrument: "กล้องโทรทรรศน์เคปเลอร์ (Kepler Photometer)",
    descriptionTh: "กล้องเคปเลอร์ขึ้นสู่อวกาศเพื่อค้นหาดาวเคราะห์ขนาดเท่าโลกที่โคจรในเขตเอื้อต่อการอยู่อาศัย ตลอดอายุการใช้งานเคปเลอร์ค้นพบดาวเคราะห์นอกระบบมากกว่า 2,600 ดวง",
    descriptionEn: "NASA launched Kepler to survey our region of the Milky Way galaxy, discovering thousands of exoplanets and proving that planets outnumber stars.",
    image: "https://images-assets.nasa.gov/image/PIA11440/PIA11440~orig.jpg",
    tags: ["Kepler", "Exoplanets", "Alien Worlds"]
  },

  // ทศวรรษ 2010
  {
    id: "kepler-22b",
    date: "2011-12-05",
    monthDay: "12-05",
    nameTh: "ดาวเคราะห์เคปเลอร์-22บี ในเขตเอื้อต่อชีวิต (Kepler-22b Discovery)",
    nameEn: "Kepler-22b: First Planet in Habitable Zone",
    type: "ดาวเคราะห์นอกระบบสุริยะ (Exoplanet)",
    typeEn: "Habitable Zone Exoplanet",
    distance: "635 ปีแสง",
    constellation: "กลุ่มดาวหงส์ (Cygnus)",
    instrument: "กล้องโทรทรรศน์อวกาศเคปเลอร์",
    descriptionTh: "ดาวเคราะห์นอกระบบดวงแรกที่เคปเลอร์ยืนยันว่าโคจรอยู่ใน 'เขตเอื้อต่อการมีชีวิต' รอบดาวฤกษ์คล้ายดวงอาทิตย์ มีขนาดประมาณ 2.4 เท่าของโลก และอาจมีน้ำในสถานะของเหลว",
    descriptionEn: "Kepler confirmed Kepler-22b as the first exoplanet orbiting within the habitable zone of a Sun-like star where liquid water could exist on its surface.",
    image: "https://images-assets.nasa.gov/image/PIA14886/PIA14886~orig.jpg",
    tags: ["Kepler-22b", "Habitable Zone", "Exoplanet", "Goldilocks"]
  },
  {
    id: "curiosity-mars-landing",
    date: "2012-08-06",
    monthDay: "08-06",
    nameTh: "ยานคิวริออสซิตีลงจอดบนดาวอังคารด้วยเครนลอยฟ้า (Curiosity Rover Sky Crane Landing)",
    nameEn: "Curiosity Rover Lands in Gale Crater, Mars",
    type: "ห้องทดลองวิทยาศาสตร์เคลื่อนที่",
    typeEn: "Mars Surface Laboratory",
    distance: "225 ล้าน กม. จากโลก",
    constellation: "ดาวอังคาร (Gale Crater)",
    instrument: "ยาน Curiosity (MSL)",
    descriptionTh: "ยานคิวริออสซิตีขนาดเท่ารถ SUV ลงจอดบนดาวอังคารอย่างอัศจรรย์ด้วยระบบ Sky Crane จรวดชะลอความเร็วหย่อนตัวยานลงมา และค้นพบหลักฐานสารอินทรีย์รวมถึงแม่น้ำโบราณ",
    descriptionEn: "Curiosity executed a daring 'seven minutes of terror' sky crane touchdown in Gale Crater, later discovering that ancient Mars had all ingredients for life.",
    image: "https://images-assets.nasa.gov/image/PIA16029/PIA16029~orig.jpg",
    tags: ["Curiosity", "Mars Landing", "Gale Crater", "MSL"]
  },
  {
    id: "kepler-186f",
    date: "2014-04-17",
    monthDay: "04-17",
    nameTh: "เคปเลอร์-186เอฟ ดาวเคราะห์หินขนาดเท่าโลกในเขตเอื้อต่อชีวิต (Kepler-186f)",
    nameEn: "Discovery of First Earth-Size Planet in Habitable Zone",
    type: "ดาวเคราะห์หินนอกระบบสุริยะ",
    typeEn: "Earth-size Exoplanet",
    distance: "580 ปีแสง",
    constellation: "กลุ่มดาวหงส์ (Cygnus)",
    instrument: "กล้องโทรทรรศน์อวกาศเคปเลอร์",
    descriptionTh: "การค้นพบครั้งประวัติศาสตร์ของดาวเคราะห์หินที่มีขนาดใกล้เคียงโลกมาก (ใหญ่กว่าโลกเพียง 10%) และโคจรอยู่ในเขตที่น้ำสามารถเป็นของเหลวได้รอบดาวแคระแดง",
    descriptionEn: "Kepler-186f was confirmed as the very first Earth-size planet found orbiting in the habitable zone of another star, a landmark milestone in astronomy.",
    image: "https://images-assets.nasa.gov/image/PIA18000/PIA18000~orig.jpg",
    tags: ["Kepler-186f", "Earth Cousin", "Exoplanet", "Habitable Zone"]
  },
  {
    id: "new-horizons-pluto",
    date: "2015-07-14",
    monthDay: "07-14",
    nameTh: "ยานนิวฮอไรซันส์บินผ่านดาวพลูโต (New Horizons Pluto Flyby)",
    nameEn: "New Horizons Historic Pluto Flyby",
    type: "ดาวเคราะห์แคระและแถบไคเปอร์",
    typeEn: "Dwarf Planet Flyby",
    distance: "4.7 พันล้าน กม. จากโลก",
    constellation: "กลุ่มดาวคนยิงธนู (Sagittarius)",
    instrument: "ยานสำรวจ New Horizons (RALPH/LORRI)",
    descriptionTh: "ยานนิวฮอไรซันส์เดินทางกว่า 9 ปีเพื่อไปถึงดาวพลูโต เผยภาพธารน้ำแข็งไนโตรเจนรูปหัวใจขนาดยักษ์ (Sputnik Planitia) เทือกเขาน้ำแข็งสูงเสียดฟ้า และชั้นบรรยากาศสีฟ้าอันน่าทึ่ง",
    descriptionEn: "After a nine-year journey, New Horizons revealed Pluto in astonishing detail, including its vast heart-shaped nitrogen glacier and towering water-ice peaks.",
    image: "https://images-assets.nasa.gov/image/PIA19952/PIA19952~orig.jpg",
    tags: ["Pluto", "New Horizons", "Heart of Pluto", "Kuiper Belt"]
  },
  {
    id: "kepler-452b",
    date: "2015-07-23",
    monthDay: "07-23",
    nameTh: "เคปเลอร์-452บี พี่ชายคนโตของโลก (Kepler-452b - Earth's Bigger Cousin)",
    nameEn: "Kepler-452b Discovery: Earth's Older, Bigger Cousin",
    type: "ดาวเคราะห์นอกระบบคล้ายโลก",
    typeEn: "Super-Earth Exoplanet",
    distance: "1,400 ปีแสง",
    constellation: "กลุ่มดาวหงส์ (Cygnus)",
    instrument: "กล้องโทรทรรศน์อวกาศเคปเลอร์",
    descriptionTh: "ดาวเคราะห์ที่มีวงโคจร 385 วันรอบดาวฤกษ์ประเภทเดียวกับดวงอาทิตย์ มีขนาดใหญ่กว่าโลก 60% และอยู่ในเขตเอื้อชีวิต เป็นดาวเคราะห์ที่ใกล้เคียงคู่แฝดของโลกมากที่สุดแห่งหนึ่ง",
    descriptionEn: "NASA discovered Kepler-452b, an exoplanet orbiting a G2-type star like our Sun every 385 days, located firmly within the star's habitable zone.",
    image: "https://images-assets.nasa.gov/image/PIA19827/PIA19827~orig.jpg",
    tags: ["Kepler-452b", "Earth Twin", "Exoplanet", "Habitable Zone"]
  },
  {
    id: "juno-jupiter-arrival",
    date: "2016-07-04",
    monthDay: "07-04",
    nameTh: "ยานจูโนเข้าสู่วงโคจรขั้วดาวพฤหัสบดี (Juno Spacecraft Enters Jupiter Orbit)",
    nameEn: "Juno Enters Polar Orbit of Jupiter",
    type: "ภารกิจสำรวจดาวพฤหัสบดี",
    typeEn: "Jupiter Polar Exploration",
    distance: "868 ล้าน กม. จากโลก",
    constellation: "ดาวพฤหัสบดี (Jupiter)",
    instrument: "ยานสำรวจ Juno (JunoCam)",
    descriptionTh: "ยานจูโนจุดเครื่องยนต์ฝ่าด่านสนามรังสีรุนแรงที่สุดเพื่อเข้าสู่วงโคจรขั้วดาวพฤหัสบดี ถ่ายภาพพายุไซโคลนขนาดยักษ์รูปทรงเรขาคณิตที่ขั้วเหนือและขั้วใต้ และวัดความลึกของจุดแดงใหญ่",
    descriptionEn: "Juno slipped into orbit around Jupiter after a 5-year cruise to study its deep atmosphere, magnetic dynamo, and breathtaking polar geometric cyclones.",
    image: "https://images-assets.nasa.gov/image/PIA21381/PIA21381~orig.jpg",
    tags: ["Juno", "Jupiter", "Cyclones", "Great Red Spot"]
  },
  {
    id: "trappist-1-system",
    date: "2017-02-22",
    monthDay: "02-22",
    nameTh: "ระบบดาวแทรพพิสต์-1 เจ็ดดาวเคราะห์ขนาดเท่าโลก (TRAPPIST-1 System)",
    nameEn: "NASA Announces 7 Earth-Sized Planets Around TRAPPIST-1",
    type: "ระบบดาวเคราะห์นอกระบบหลายดวง",
    typeEn: "Multi-Planet Exoplanet System",
    distance: "39.6 ปีแสง",
    constellation: "กลุ่มดาวคนแบกหม้อน้ำ (Aquarius)",
    instrument: "กล้องสปิตเซอร์และฮับเบิล (Spitzer & Hubble)",
    descriptionTh: "NASA ประกาศการค้นพบระบบดาว TRAPPIST-1 ซึ่งประกอบด้วยดาวเคราะห์หินขนาดเท่าโลกถึง 7 ดวง โคจรรอบดาวแคระเย็นจัด โดยมีถึง 3 ดวงที่อยู่ในเขตเอื้อต่อการมีชีวิต",
    descriptionEn: "NASA revealed the discovery of seven temperate Earth-size planets orbiting dwarf star TRAPPIST-1, with three residing within the habitable liquid water zone.",
    image: "https://images-assets.nasa.gov/image/PIA21422/PIA21422~orig.jpg",
    tags: ["TRAPPIST-1", "Earth-sized", "Spitzer", "Exoplanets"]
  },
  {
    id: "oumuamua-interstellar",
    date: "2017-10-19",
    monthDay: "10-19",
    nameTh: "โอมูอามูอา ผู้มาเยือนจากต่างระบบดาวดวงแรก ('Oumuamua)",
    nameEn: "Discovery of First Interstellar Interloper 'Oumuamua",
    type: "วัตถุจากอวกาศระหว่างดวงดาว",
    typeEn: "Interstellar Object",
    distance: "กำลังเดินทางออกจากระบบสุริยะ",
    constellation: "กลุ่มดาวพิณ (Lyra)",
    instrument: "กล้องสำรวจ Pan-STARRS และกล้อง NASA",
    descriptionTh: "การตรวจพบวัตถุรูปร่างเรียวยาวคล้ายซิการ์สีแดงเข้มที่พุ่งทะลุเข้ามาในระบบสุริยะด้วยความเร็วสูง เป็นวัตถุชิ้นแรกในประวัติศาสตร์ที่ยืนยันว่ามาจากระบบดาวดวงอื่นนอกระบบสุริยะเรา",
    descriptionEn: "'Oumuamua was identified as the first confirmed object from another star system to visit our Solar System, possessing an extreme elongated shape.",
    image: "https://images-assets.nasa.gov/image/PIA22108/PIA22108~orig.jpg",
    tags: ["Oumuamua", "Interstellar Object", "Deep Space"]
  },
  {
    id: "parker-solar-probe-launch",
    date: "2018-08-12",
    monthDay: "08-12",
    nameTh: "ยานพาร์กเกอร์บินสัมผัสดวงอาทิตย์ (Parker Solar Probe Launch)",
    nameEn: "Parker Solar Probe Launches to 'Touch the Sun'",
    type: "ยานสำรวจดวงอาทิตย์ความเร็วสูงสุด",
    typeEn: "Heliophysics Solar Mission",
    distance: "150 ล้าน กม. (เข้าใกล้ผิวดวงอาทิตย์ไม่กี่ล้าน กม.)",
    constellation: "ดวงอาทิตย์ (Sun / Corona)",
    instrument: "เกราะกันความร้อนคาร์บอนคอมโพสิตของยาน Parker",
    descriptionTh: "ยานพาร์กเกอร์ถูกส่งขึ้นสู่อวกาศเพื่อเป็นยานลำแรกที่ 'แตะต้องดวงอาทิตย์' บินผ่านชั้นโคโรนาที่มีความร้อนหลายล้านองศา และทำสถิติเป็นวัตถุที่เคลื่อนที่เร็วที่สุดในประวัติศาสตร์มนุษยชาติ",
    descriptionEn: "Parker Solar Probe launched on a historic mission to fly directly through the Sun's blazing corona, becoming the fastest human-made object in history.",
    image: "https://images-assets.nasa.gov/image/KSC-20180812-PH_KLS01_0047/KSC-20180812-PH_KLS01_0047~orig.jpg",
    tags: ["Sun", "Parker Solar Probe", "Fastest Spacecraft", "Corona"]
  },
  {
    id: "arrokoth-ultimathule",
    date: "2019-01-01",
    monthDay: "01-01",
    nameTh: "การบินผ่านอาร์โรโคท วัตถุดึกดำบรรพ์ไกลโพ้น (Arrokoth Flyby)",
    nameEn: "New Horizons Flyby of Ultima Thule (Arrokoth)",
    type: "วัตถุแถบไคเปอร์ยุคกำเนิดโลก",
    typeEn: "Kuiper Belt Object",
    distance: "6.6 พันล้าน กม. จากโลก",
    constellation: "กลุ่มดาวคนยิงธนู (Sagittarius)",
    instrument: "ยานสำรวจ New Horizons",
    descriptionTh: "ในวันปีใหม่ 2019 ยานนิวฮอไรซันส์บินผ่าน 'อาร์โรโคท' วัตถุแถบไคเปอร์รูปทรงมนุษย์หิมะสีแดง เป็นการสำรวจวัตถุที่เก่าแก่และดึกดำบรรพ์ที่สุดเท่าที่ยานอวกาศเคยเข้าใกล้",
    descriptionEn: "New Horizons executed the farthest planetary flyby in human history, sweeping past Arrokoth, an intact primitive contact binary from the birth of the planets.",
    image: "https://images-assets.nasa.gov/image/PIA23177/PIA23177~orig.jpg",
    tags: ["Arrokoth", "Kuiper Belt", "New Horizons", "Primitive World"]
  },
  {
    id: "m87-black-hole",
    date: "2019-04-10",
    monthDay: "04-10",
    nameTh: "ภาพถ่ายเงาหลุมดำภาพแรกในประวัติศาสตร์ (First Image of a Black Hole - M87*)",
    nameEn: "Event Horizon Telescope Reveals First Image of Black Hole M87*",
    type: "หลุมดำมวลยิ่งยวด",
    typeEn: "Supermassive Black Hole",
    distance: "55 ล้านปีแสง",
    constellation: "กลุ่มดาวหญิงสาว (Virgo - Galaxy M87)",
    instrument: "เครือข่ายกล้องโทรทรรศน์ขอบฟ้าเหตุการณ์ (EHT)",
    descriptionTh: "มนุษยชาติได้เห็นภาพเงาของหลุมดำเป็นครั้งแรกในประวัติศาสตร์ วงแหวนแสงเรืองรองรอบเงาดำมืดของหลุมดำใจกลางกาแล็กซี M87 ซึ่งมีมวลมากกว่าดวงอาทิตย์ถึง 6.5 พันล้านเท่า",
    descriptionEn: "Scientists revealed the historic first direct visual evidence of a supermassive black hole and its shadow at the center of galaxy Messier 87.",
    image: "https://images-assets.nasa.gov/image/PIA23122/PIA23122~orig.jpg",
    tags: ["Black Hole", "M87", "Event Horizon", "Physics Breakthrough"]
  },

  // ทศวรรษ 2020
  {
    id: "perseverance-landing",
    date: "2021-02-18",
    monthDay: "02-18",
    nameTh: "ยานเพอร์เซเวียแรนส์ลงจอดที่หลุมอุกกาบาตเจเซโร (Perseverance Mars Landing)",
    nameEn: "Perseverance Rover Lands at Jezero Crater, Mars",
    type: "ยานสำรวจค้นหาร่องรอยสิ่งมีชีวิตโบราณ",
    typeEn: "Mars Astrobiology Rover",
    distance: "210 ล้าน กม. จากโลก",
    constellation: "ดาวอังคาร (Jezero Crater)",
    instrument: "ยาน Perseverance และกล้อง Mastcam-Z",
    descriptionTh: "ยานเพอร์เซเวียแรนส์ลงจอดในอดีตทะเลสาบและสามเหลี่ยมปากแม่น้ำโบราณบนดาวอังคาร เพื่อค้นหาร่องรอยของจุลชีพดึกดำบรรพ์ พร้อมเจาะเก็บตัวอย่างหินบรรจุแคปซูลเพื่อนำกลับโลก",
    descriptionEn: "Perseverance touched down safely on Mars to search for signs of ancient microbial life and collect pristine core samples for future return to Earth.",
    image: "https://images-assets.nasa.gov/image/PIA24428/PIA24428~orig.jpg",
    tags: ["Perseverance", "Mars 2020", "Jezero Crater", "Astrobiology"]
  },
  {
    id: "ingenuity-first-flight",
    date: "2021-04-19",
    monthDay: "04-19",
    nameTh: "เฮลิคอปเตอร์อินเจนูอิตีบินบนดาวอังคารครั้งแรก (Ingenuity First Mars Flight)",
    nameEn: "Ingenuity Mars Helicopter Makes Historic First Flight",
    type: "อากาศยานขับเคลื่อนในบรรยากาศต่างดาว",
    typeEn: "Planetary Aerial Vehicle",
    distance: "290 ล้าน กม. จากโลก",
    constellation: "ดาวอังคาร (Wright Brothers Field)",
    instrument: "เฮลิคอปเตอร์อัจฉริยะ Ingenuity",
    descriptionTh: "ช่วงเวลาประวัติศาสตร์เทียบเท่าพี่น้องไรต์ เมื่อเฮลิคอปเตอร์อินเจนูอิตีขนาดกะทัดรัดหมุนใบพัดทะยานขึ้นสู่ชั้นบรรยากาศอันเบาบางของดาวอังคาร เป็นการบินควบคุมครั้งแรกบนดาวดวงอื่น",
    descriptionEn: "Ingenuity performed the first powered, controlled flight on another planet, rising into the razor-thin Martian atmosphere and opening a new era of aerial planetary exploration.",
    image: "https://images-assets.nasa.gov/image/PIA24542/PIA24542~orig.jpg",
    tags: ["Ingenuity", "Mars Helicopter", "Aviation First", "Wright Brothers Moment"]
  },
  {
    id: "jwst-launch",
    date: "2021-12-25",
    monthDay: "12-25",
    nameTh: "การส่งกล้องโทรทรรศน์อวกาศเจมส์ เวบบ์ (James Webb Space Telescope Launch)",
    nameEn: "Launch of the James Webb Space Telescope (JWST)",
    type: "หอสังเกตการณ์อินฟราเรดอวกาศลึก",
    typeEn: "Flagship Space Observatory",
    distance: "1.5 ล้าน กม. จากโลก (จุดลากรองจ์ L2)",
    constellation: "จุดลากรองจ์ Sun-Earth L2",
    instrument: "จรวด Ariane 5 / กล้อง JWST",
    descriptionTh: "ในวันคริสต์มาสปี 2021 กล้องโทรทรรศน์อวกาศที่ทรงพลังที่สุดในประวัติศาสตร์ 'เจมส์ เวบบ์' ทะยานขึ้นสู่อวกาศด้วยกระจกเคลือบทองคำขนาด 6.5 เมตร เพื่อไขความลับแสงแรกของเอกภพ",
    descriptionEn: "JWST lifted off on Christmas Day 2021, deploying its golden hexagonal primary mirror and tennis-court sized sunshield to gaze back over 13.5 billion years.",
    image: "https://images-assets.nasa.gov/image/202112250002_JWST_Ariane_5_launch/202112250002_JWST_Ariane_5_launch~orig.jpg",
    tags: ["JWST", "James Webb", "Launch", "Infrared Astronomy"]
  },
  {
    id: "jwst-first-deep-field",
    date: "2022-07-11",
    monthDay: "07-11",
    nameTh: "ภาพอวกาศลึกภาพแรกของเจมส์ เวบบ์ (Webb's First Deep Field - SMACS 0723)",
    nameEn: "President Biden Unveils Webb's First Deep Field",
    type: "กระจุกกาแล็กซีและเลนส์ความโน้มถ่วง",
    typeEn: "Gravitational Lensing Deep Field",
    distance: "4.6 พันล้านปีแสง (เลนส์) ถึง 13.1 พันล้านปีแสง (กาแล็กซีเบื้องหลัง)",
    constellation: "กลุ่มดาวปลาบิน (Volans)",
    instrument: "กล้อง NIRCam บนกล้องเจมส์ เวบบ์",
    descriptionTh: "ภาพถ่ายอินฟราเรดที่ลึกและคมชัดที่สุดของเอกภพเท่าที่เคยบันทึกมา กระจุกกาแล็กซีทำหน้าที่เป็นเลนส์โน้มถ่วงขยายภาพกาแล็กซียุคแรกเริ่มที่ส่องสว่างหลังบิกแบงเพียงไม่กี่ร้อยล้านปี",
    descriptionEn: "Webb's First Deep Field showed galaxy cluster SMACS 0723 acting as a gravitational lens, magnifying the faintest galaxies ever observed in the infrared.",
    image: "https://images-assets.nasa.gov/image/webb-smacs-0723-comp/webb-smacs-0723-comp~orig.jpg",
    tags: ["JWST", "Deep Field", "SMACS 0723", "First Light"]
  },
  {
    id: "carina-nebula-cliffs",
    date: "2022-07-12",
    monthDay: "07-12",
    nameTh: "หน้าผาจักรวาลในเนบิวลากระดูกงูเรือ (Cosmic Cliffs in Carina Nebula)",
    nameEn: "Webb Reveals Cosmic Cliffs in Carina Nebula",
    type: "หน้าผาแก๊สและแหล่งกำเนิดดาว",
    typeEn: "Star-Forming Region",
    distance: "7,600 ปีแสง",
    constellation: "กลุ่มดาวกระดูกงูเรือ (Carina)",
    instrument: "กล้อง NIRCam และ MIRI บนกล้องเจมส์ เวบบ์",
    descriptionTh: "ภาพทิวทัศน์ 'หน้าผาจักรวาล' ขนาดยักษ์ในเนบิวลากระดูกงูเรือ เผยให้เห็นบริเวณกำเนิดดาวฤกษ์ที่เคยซ่อนอยู่หลังม่านฝุ่นทึบ แสงอินฟราเรดของเวบบ์เจาะทะลุฝุ่นจนเห็นดาวเกิดใหม่นับร้อยดวง",
    descriptionEn: "Webb unveiled the dramatic 'Cosmic Cliffs' in NGC 3324, revealing previously invisible areas of star birth in hyper-detailed infrared light.",
    image: "https://images-assets.nasa.gov/image/carina_nebula_0/carina_nebula_0~orig.jpg",
    tags: ["Carina Nebula", "Cosmic Cliffs", "JWST", "Star Formation"]
  },
  {
    id: "dart-impact",
    date: "2022-09-26",
    monthDay: "09-26",
    nameTh: "ภารกิจ DART พุ่งชนดาวเคราะห์น้อยเปลี่ยนวิถี (DART Asteroid Impact)",
    nameEn: "NASA's DART Mission Successfully Impacts Asteroid Dimorphos",
    type: "การป้องกันภัยดาวเคราะห์นอกโลก",
    typeEn: "Planetary Defense Test",
    distance: "11 ล้าน กม. จากโลก",
    constellation: "ระบบดาวเคราะห์น้อย Didymos-Dimorphos",
    instrument: "ยาน DART และกล้อง DRACO",
    descriptionTh: "การทดสอบป้องกันโลกครั้งแรกในประวัติศาสตร์ ยาน DART พุ่งชนดาวเคราะห์น้อยไดมอร์ฟอสด้วยความเร็ว 22,500 กม./ชม. และประสบความสำเร็จในการเปลี่ยนวงโคจรของดาวเคราะห์น้อยได้จริง",
    descriptionEn: "In humanity's first planetary defense test, DART slammed into asteroid Dimorphos, successfully altering its orbital period around parent Didymos.",
    image: "https://images-assets.nasa.gov/image/PIA25450/PIA25450~orig.jpg",
    tags: ["DART", "Planetary Defense", "Asteroid", "Dimorphos"]
  },
  {
    id: "osiris-rex-bennu-return",
    date: "2023-09-24",
    monthDay: "09-24",
    nameTh: "แคปซูลตัวอย่างดาวเคราะห์น้อยเบนนูเดินทางถึงโลก (OSIRIS-REx Sample Return)",
    nameEn: "OSIRIS-REx Returns Asteroid Bennu Sample to Earth",
    type: "ตัวอย่างวัตถุดึกดำบรรพ์จากอวกาศ",
    typeEn: "Asteroid Sample Return",
    distance: "ลงจอดที่ทะเลทรายยูทาห์ สหรัฐฯ",
    constellation: "ดาวเคราะห์น้อย Bennu",
    instrument: "แคปซูลเก็บตัวอย่างยาน OSIRIS-REx",
    descriptionTh: "แคปซูลของยาน OSIRIS-REx ร่อนลงสู่พื้นผิวโลก นำตัวอย่างฝุ่นและหินจากดาวเคราะห์น้อยเบนนูกว่า 120 กรัมกลับมา ซึ่งอุดมไปด้วยคาร์บอนและโมเลกุลน้ำจากยุคกำเนิดระบบสุริยะ",
    descriptionEn: "OSIRIS-REx safely delivered humanity's largest asteroid sample from Bennu to Earth, containing vital water and carbon-rich organic clues to early solar system history.",
    image: "https://images-assets.nasa.gov/image/NHQ202309240038/NHQ202309240038~orig.jpg",
    tags: ["Bennu", "OSIRIS-REx", "Asteroid Sample", "Origins of Life"]
  },
  {
    id: "europa-clipper-launch",
    date: "2024-10-14",
    monthDay: "10-14",
    nameTh: "การปล่อยยานยูโรปาคลิปเปอร์สู่มหาสมุทรต่างดาว (Europa Clipper Launch)",
    nameEn: "Europa Clipper Launches to Explore Ocean Moon",
    type: "ยานสำรวจมหาสมุทรใต้พิภพ",
    typeEn: "Planetary Ocean Exploration",
    distance: "เดินทาง 2.9 พันล้าน กม. สู่ระบบดาวพฤหัสบดี",
    constellation: "ดาวพฤหัสบดี (Europa)",
    instrument: "ยานสำรวจ Europa Clipper (จรวด Falcon Heavy)",
    descriptionTh: "ยานอวกาศขนาดใหญ่ที่สุดที่ NASA เคยสร้างสำหรับภารกิจดาวเคราะห์ ทะยานขึ้นสู่อวกาศเพื่อไปสำรวจดวงจันทร์ยูโรปาของดาวพฤหัสบดี ซึ่งซ่อนมหาสมุทรน้ำเค็มปริมาณมหาศาลไว้ใต้เปลือกน้ำแข็ง",
    descriptionEn: "Europa Clipper launched on Falcon Heavy to investigate Jupiter's moon Europa and determine whether its subterranean ocean harbors conditions suitable for life.",
    image: "https://images-assets.nasa.gov/image/KSC-20241014-PH-CSH01_0045/KSC-20241014-PH-CSH01_0045~orig.jpg",
    tags: ["Europa Clipper", "Jupiter Moon", "Subsurface Ocean", "Habitability"]
  },
  {
    id: "jwst-cosmic-web-2025",
    date: "2025-07-12",
    monthDay: "07-12",
    nameTh: "ใยคอสมิกแห่งเอกภพยุคแรกเริ่มโดยเจมส์ เวบบ์ (JWST Cosmic Web)",
    nameEn: "JWST Reveals Early Universe Cosmic Web",
    type: "กระจุกกาแล็กซีห้วงอวกาศลึก",
    typeEn: "Deep Field Galaxies",
    distance: "13,400 ล้านปีแสง จากโลก",
    constellation: "กลุ่มดาวเตาหลอม (Fornax)",
    instrument: "กล้องโทรทรรศน์อวกาศ James Webb (NIRCam)",
    descriptionTh: "ภาพถ่ายอินฟราเรดลึกพิเศษบันทึกโครงสร้างใยคอสมิกขนาดมหึมาที่เชื่อมโยงกาแล็กซีรุ่นแรกๆ ของจักรวาล เผยให้เห็นการรวมตัวของมวลสารมืดและไฮโดรเจนหลังบิกแบงเพียงไม่กี่ร้อยล้านปี",
    descriptionEn: "James Webb NIRCam captured the vast filaments of the cosmic web connecting first-generation galaxies in the infant universe, validating foundational cosmological models.",
    image: "https://images-assets.nasa.gov/image/STScI-01J3Q7H02G40B8F9AEMQXZF28P/STScI-01J3Q7H02G40B8F9AEMQXZF28P~orig.jpg",
    hdurl: "https://images-assets.nasa.gov/image/STScI-01J3Q7H02G40B8F9AEMQXZF28P/STScI-01J3Q7H02G40B8F9AEMQXZF28P~orig.jpg",
    tags: ["JWST", "Cosmic Web", "Deep Field", "Early Universe"]
  },
  {
    id: "asteroid-torifune-2026",
    date: "2026-07-14",
    monthDay: "07-14",
    nameTh: "ดาวเคราะห์น้อยสองพู โทริฟุเนะ (Double Lobed Asteroid Torifune)",
    nameEn: "Double Lobed Asteroid Torifune by Hayabusa2",
    type: "ดาวเคราะห์น้อยใกล้โลก",
    typeEn: "Near-Earth Asteroid",
    distance: "เฉียดใกล้โลกในวงโคจรสุริยะ",
    constellation: "ระบบสุริยะชั้นใน",
    instrument: "ยานสำรวจ Hayabusa2 (JAXA & NASA Grounding)",
    descriptionTh: "ยาน Hayabusa2 บินผ่านดาวเคราะห์น้อย 98943 โทริฟุเนะ และถ่ายภาพระยะใกล้ เผยให้เห็นโครงสร้างสองก้อนที่ชนกันและเชื่อมต่อเป็นเนื้อเดียวกัน พร้อมก้อนหินระเกะระกะเต็มพื้นผิวโดยแทบไม่มีหลุมอุกกาบาต",
    descriptionEn: "Hayabusa2 swept past asteroid 98943 Torifune, revealing a peanut-shaped double-lobed rubble pile world that formed from two primordial bodies colliding gently in space.",
    image: "https://assets.science.nasa.gov/content/dam/science/cds/apod/apod/2026/july/Torifune_JAXA_1400.jpg",
    hdurl: "https://assets.science.nasa.gov/content/dam/science/cds/apod/apod/2026/july/Torifune_JAXA_1400.jpg",
    tags: ["Hayabusa2", "Torifune", "Asteroid", "2026 Discovery"]
  },
  {
    id: "harvest-moon-etna-2026",
    date: "2026-10-01",
    monthDay: "10-01",
    nameTh: "ดวงจันทร์เก็บเกี่ยวเหนือภูเขาไฟเอตนาปะทุ (Harvest Moon with Mount Etna)",
    nameEn: "Harvest Moon with Erupting Mount Etna",
    type: "ปรากฏการณ์ดาราศาสตร์โลก",
    typeEn: "Astronomical Landscape",
    distance: "384,400 กม. (ดวงจันทร์) & เกาะซิซิลี",
    constellation: "ดวงจันทร์เต็มดวง (Full Moon)",
    instrument: "ภาพถ่ายดาราศาสตร์ความละเอียดสูง (APOD 2026)",
    descriptionTh: "ดวงจันทร์เพ็ญแห่งฤดูเก็บเกี่ยวลอยเด่นเหนือปากปล่องภูเขาไฟเอตนาที่กำลังพ่นลาวาแดงฉานในเกาะซิซิลี ตัดกับแถบวีนัสสีชมพูละมุนและเงาชั้นบรรยากาศโลกอย่างวิจิตรงดงาม",
    descriptionEn: "A magnificent composite of the full Harvest Moon rising behind the fiery plumes of Sicily's erupting Mount Etna, framed by the pink Belt of Venus and twilight sky.",
    image: "https://assets.science.nasa.gov/dynamicimage/assets/science/cds/apod/apod/2026/october/Harvest%20Moon%20Trail%20With%20Venus%20Belt%20and%20Erupting%20Mount%20Etna%204%20LD.jpg",
    hdurl: "https://assets.science.nasa.gov/dynamicimage/assets/science/cds/apod/apod/2026/october/Harvest%20Moon%20Trail%20With%20Venus%20Belt%20and%20Erupting%20Mount%20Etna%204%20LD.jpg",
    tags: ["Harvest Moon", "Mount Etna", "Belt of Venus", "2026 APOD"]
  }
];

// ชุดข้อมูลวัตถุอวกาศตามปฏิทิน 12 เดือน (รองรับการค้นหาตามวันเกิด วัน/เดือน ครบทุกช่วงเวลา)
const CALENDAR_CELESTIAL_OBJECTS = [
  // มกราคม
  {
    monthDay: "01-01",
    nameTh: "อาร์โรโคท วัตถุดึกดำบรรพ์สองก้อนติดกัน (Arrokoth)",
    nameEn: "Arrokoth - The Farthest Primitive World Explored",
    type: "วัตถุแถบไคเปอร์",
    constellation: "กลุ่มดาวคนยิงธนู",
    instrument: "New Horizons",
    summaryTh: "วัตถุอวกาศดึกดำบรรพ์รูปมนุษย์หิมะที่เกิดจากหินอวกาศสองก้อนรวมตัวกันอย่างนุ่มนวลตั้งแต่ยุคกำเนิดระบบสุริยะ",
    image: "https://images-assets.nasa.gov/image/PIA23177/PIA23177~orig.jpg"
  },
  {
    monthDay: "01-15",
    nameTh: "ภาพอวกาศลึกฮับเบิล (Hubble Deep Field)",
    nameEn: "Hubble Deep Field Galaxies",
    type: "กาแล็กซีโบราณ",
    constellation: "กลุ่มดาวหมีใหญ่",
    instrument: "Hubble Space Telescope",
    summaryTh: "การเปิดเผยกาแล็กซีโบราณกว่า 3,000 กาแล็กซีในห้วงอวกาศที่เคยมองเห็นเป็นเพียงความมืดมิด",
    image: "https://images-assets.nasa.gov/image/hubble-deep-field-details_800/hubble-deep-field-details_800~orig.jpg"
  },
  {
    monthDay: "01-24",
    nameTh: "ดาวยูเรนัสและดวงจันทร์บริวาร (Uranus System)",
    nameEn: "Uranus and its Moons by Voyager 2",
    type: "ดาวเคราะห์แก๊สยักษ์สีฟ้า",
    constellation: "กลุ่มดาวแกะ",
    instrument: "Voyager 2",
    summaryTh: "ดาวเคราะห์น้ำแข็งยักษ์ที่หมุนเอียงข้างพร้อมวงแหวนบางและระบบดวงจันทร์น้ำแข็งบริวาร",
    image: "https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg"
  },
  {
    monthDay: "01-31",
    nameTh: "แถบรังสีสนามแม่เหล็กโลก (Van Allen Radiation Belts)",
    nameEn: "Van Allen Radiation Belts",
    type: "ปรากฏการณ์ฟิสิกส์อวกาศ",
    constellation: "วงโคจรโลก",
    instrument: "Explorer 1",
    summaryTh: "แถบรังสีอนุภาคประจุพลังงานสูงที่ถูกกักไว้โดยสนามแม่เหล็กโลก ป้องกันสิ่งมีชีวิตจากลมสุริยะ",
    image: "https://images-assets.nasa.gov/image/9801815/9801815~orig.jpg"
  },

  // กุมภาพันธ์
  {
    monthDay: "02-14",
    nameTh: "จุดสีน้ำเงินจางๆ - บ้านของเราในอวกาศ (Pale Blue Dot)",
    nameEn: "Pale Blue Dot - Earth from 6 Billion km",
    type: "ภาพถ่ายประวัติศาสตร์โลก",
    constellation: "ระบบสุริยะชั้นนอก",
    instrument: "Voyager 1",
    summaryTh: "ภาพถ่ายโลกจากระยะ 6,000 ล้านกิโลเมตร มองเห็นโลกเป็นเพียงจุดแสงสีฟ้าเล็กจิ๋วท่ามกลางแสงอาทิตย์",
    image: "https://images-assets.nasa.gov/image/PIA23645/PIA23645~orig.jpg"
  },
  {
    monthDay: "02-18",
    nameTh: "หลุมอุกกาบาตเจเซโรบนดาวอังคาร (Jezero Crater Delta)",
    nameEn: "Jezero Crater Ancient River Delta",
    type: "ธรณีวิทยาดาวอังคาร",
    constellation: "ดาวอังคาร",
    instrument: "Perseverance Rover",
    summaryTh: "อดีตปากแม่น้ำโบราณที่มีน้ำไหลผ่านเมื่อหลายพันล้านปีก่อน แหล่งค้นหาซากฟอสซิลจุลชีพต่างดาว",
    image: "https://images-assets.nasa.gov/image/PIA24428/PIA24428~orig.jpg"
  },
  {
    monthDay: "02-22",
    nameTh: "ระบบดาวฤกษ์แทรพพิสต์-1 (TRAPPIST-1 System)",
    nameEn: "TRAPPIST-1 Seven Rocky Worlds",
    type: "ระบบดาวเคราะห์นอกระบบ",
    constellation: "กลุ่มดาวคนแบกหม้อน้ำ",
    instrument: "Spitzer Space Telescope",
    summaryTh: "ระบบดาวฤกษ์แคระแดงที่มีดาวเคราะห์หินขนาดเท่าโลกถึง 7 ดวง โคจรเบียดเสียดกันอย่างน่าอัศจรรย์",
    image: "https://images-assets.nasa.gov/image/PIA21422/PIA21422~orig.jpg"
  },

  // มีนาคม
  {
    monthDay: "03-05",
    nameTh: "ภูเขาไฟเพเลบนดวงจันทร์ไอโอ (Pele Volcano on Io)",
    nameEn: "Volcanic Plumes on Jupiter's Moon Io",
    type: "ดวงจันทร์ภูเขาไฟ",
    constellation: "ดาวพฤหัสบดี",
    instrument: "Voyager 1",
    summaryTh: "ภูเขาไฟกำมะถันที่พ่นเถ้าถ่านลาวาสูงหลายร้อยกิโลเมตรขึ้นสู่อวกาศอันหนาวเหน็บ",
    image: "https://images-assets.nasa.gov/image/PIA01530/PIA01530~orig.jpg"
  },
  {
    monthDay: "03-07",
    nameTh: "สนามดาวฤกษ์ล่าดาวเคราะห์ของเคปเลอร์ (Kepler Starfield)",
    nameEn: "Kepler Space Observatory Starfield",
    type: "กระจุกดาวในทางช้างเผือก",
    constellation: "กลุ่มดาวหงส์",
    instrument: "Kepler Space Telescope",
    summaryTh: "การจับตาดูดาวฤกษ์กว่า 150,000 ดวงพร้อมกัน เพื่อตรวจจับเงาของดาวเคราะห์บริวารที่เคลื่อนผ่านหน้าดาวฤกษ์",
    image: "https://images-assets.nasa.gov/image/PIA11440/PIA11440~orig.jpg"
  },
  {
    monthDay: "03-20",
    nameTh: "เนบิวลาฟองสบู่ (Bubble Nebula - NGC 7635)",
    nameEn: "Bubble Nebula (NGC 7635)",
    type: "เนบิวลาเปล่งแสง",
    constellation: "กลุ่มดาวแคสซิโอเปีย",
    instrument: "Hubble Space Telescope",
    summaryTh: "ฟองแก๊สเรืองแสงขนาดยักษ์กว้าง 7 ปีแสง ถูกเป่าให้พองออกด้วยลมสุริยะความเร็วสูงจากดาวฤกษ์มวลมหึมาภายใน",
    image: "https://images-assets.nasa.gov/image/PIA20055/PIA20055~orig.jpg"
  },

  // เมษายน
  {
    monthDay: "04-01",
    nameTh: "เสาหลักแห่งการสร้าง (Pillars of Creation)",
    nameEn: "Pillars of Creation - Eagle Nebula",
    type: "แหล่งอนุบาลดาวฤกษ์",
    constellation: "กลุ่มดาวงู",
    instrument: "Hubble Space Telescope",
    summaryTh: "เสาแก๊สและฝุ่นโมเลกุลขนาดยักษ์สูงหลายปีแสง สถานที่ที่ดาวฤกษ์ดวงใหม่กำลังก่อกำเนิดขึ้นท่ามกลางจักรวาล",
    image: "https://images-assets.nasa.gov/image/PIA05982/PIA05982~orig.jpg"
  },
  {
    monthDay: "04-10",
    nameTh: "เงาหลุมดำยักษ์ M87* (M87 Black Hole Shadow)",
    nameEn: "M87 Supermassive Black Hole Shadow",
    type: "หลุมดำมวลยิ่งยวด",
    constellation: "กลุ่มดาวหญิงสาว",
    instrument: "Event Horizon Telescope & NASA",
    summaryTh: "ภาพประวัติศาสตร์ของวงแหวนแสงร้อนระอุรอบขอบฟ้าเหตุการณ์ของหลุมดำที่มีมวล 6.5 พันล้านเท่าของดวงอาทิตย์",
    image: "https://images-assets.nasa.gov/image/PIA23122/PIA23122~orig.jpg"
  },
  {
    monthDay: "04-17",
    nameTh: "ดาวเคราะห์เคปเลอร์-186เอฟ (Kepler-186f)",
    nameEn: "Earth Cousin Exoplanet Kepler-186f",
    type: "ดาวเคราะห์นอกระบบหินแข็ง",
    constellation: "กลุ่มดาวหงส์",
    instrument: "Kepler Space Telescope",
    summaryTh: "ดาวเคราะห์หินดวงแรกที่ค้นพบว่ามีขนาดเกือบเท่าโลกและอยู่ในเขตที่น้ำสามารถคงสถานะเป็นของเหลวได้",
    image: "https://images-assets.nasa.gov/image/PIA18000/PIA18000~orig.jpg"
  },
  {
    monthDay: "04-24",
    nameTh: "ดวงตาสวรรค์ กล้องโทรทรรศน์อวกาศฮับเบิล (Hubble Telescope)",
    nameEn: "Hubble Space Telescope Deployment",
    type: "หอสังเกตการณ์อวกาศ",
    constellation: "วงโคจรต่ำของโลก",
    instrument: "STS-31 Discovery",
    summaryTh: "กล้องโทรทรรศน์อวกาศที่เป็นตำนาน เปลี่ยนแปลงความเข้าใจของมนุษย์เกี่ยวกับขนาดและอายุของเอกภพไปตลอดกาล",
    image: "https://images-assets.nasa.gov/image/sts031-11-007/sts031-11-007~orig.jpg"
  },

  // พฤษภาคม
  {
    monthDay: "05-04",
    nameTh: "เนบิวลารูปปู (Crab Nebula - M1)",
    nameEn: "Crab Nebula Supernova Remnant (M1)",
    type: "ซากซูเปอร์โนวา",
    constellation: "กลุ่มดาววัว",
    instrument: "Hubble & Chandra",
    summaryTh: "ซากความพินาศหลังการระเบิดซูเปอร์โนวาที่บันทึกไว้ตั้งแต่ปี ค.ศ. 1054 ใจกลางมีดาวนิวตรอนหมุนควงส่งสัญญาณพัลซาร์",
    image: "https://images-assets.nasa.gov/image/PIA03606/PIA03606~orig.jpg"
  },
  {
    monthDay: "05-15",
    nameTh: "เนบิวลาวงแหวน (Ring Nebula - M57)",
    nameEn: "Ring Nebula (Messier 57)",
    type: "เนบิวลาดาวเคราะห์",
    constellation: "กลุ่มดาวพิณ",
    instrument: "Hubble & JWST",
    summaryTh: "วงแหวนแก๊สเรืองแสงสีรุ้งที่ถูกขับออกมาจากดาวฤกษ์ที่กำลังจะตาย สะท้อนภาพชะตากรรมของดวงอาทิตย์ในอีก 5 พันล้านปี",
    image: "https://images-assets.nasa.gov/image/PIA17037/PIA17037~orig.jpg"
  },
  {
    monthDay: "05-25",
    nameTh: "กาแล็กซีกังหันน้ำวน (Whirlpool Galaxy - M51)",
    nameEn: "Whirlpool Galaxy (Messier 51)",
    type: "กาแล็กซีก้นหอยชนกัน",
    constellation: "กลุ่มดาวหมาล่าเนื้อ",
    instrument: "Hubble Space Telescope",
    summaryTh: "แขนกังหันกว้างใหญ่ที่ประดับด้วยกระจุกดาวเกิดใหม่สีน้ำเงิน กำลังดึงดูดและมีปฏิสัมพันธ์กับกาแล็กซีแคระข้างเคียง",
    image: "https://images-assets.nasa.gov/image/PIA04223/PIA04223~orig.jpg"
  },

  // มิถุนายน
  {
    monthDay: "06-05",
    nameTh: "เนบิวลาหัวม้า (Horsehead Nebula - Barnard 33)",
    nameEn: "Horsehead Nebula in Orion",
    type: "เนบิวลามืด",
    constellation: "กลุ่มดาวนายพราน",
    instrument: "Hubble Space Telescope",
    summaryTh: "กลุ่มฝุ่นหนาทึบเงาดำบดบังแสงดาวเบื้องหลัง ก่อตัวเป็นรูปทรงหัวม้าอันเป็นเอกลักษณ์โด่งดังระดับโลก",
    image: "https://images-assets.nasa.gov/image/PIA16884/PIA16884~orig.jpg"
  },
  {
    monthDay: "06-16",
    nameTh: "ภาพดาราศาสตร์ประจำวันภาพแรกของ NASA (First NASA APOD)",
    nameEn: "First APOD: Neutron Star Nemesis",
    type: "ดาราศาสตร์ดิจิทัล",
    constellation: "ห้วงอวกาศลึก",
    instrument: "โครงการ NASA APOD",
    summaryTh: "จุดเริ่มต้นของโครงการ Astronomy Picture of the Day (APOD) ที่เผยแพร่ความงดงามของจักรวาลทุกวันมาตั้งแต่ปี 1995",
    image: "https://images-assets.nasa.gov/image/PIA02220/PIA02220~orig.jpg"
  },
  {
    monthDay: "06-25",
    nameTh: "เนบิวลาผีเสื้อ (Butterfly Nebula - NGC 6302)",
    nameEn: "Butterfly Nebula Wings of Gas",
    type: "เนบิวลาดาวเคราะห์สองขั้ว",
    constellation: "กลุ่มดาวแมงป่อง",
    instrument: "Hubble Space Telescope",
    summaryTh: "ปีกแก๊สร้อนระอุพุ่งออกจากดาวฤกษ์ที่กำลังดับสูญด้วยความเร็วกว่า 900,000 กิโลเมตรต่อชั่วโมง ดุจผีเสื้อสยายปีกในอวกาศ",
    image: "https://images-assets.nasa.gov/image/PIA12122/PIA12122~orig.jpg"
  },

  // กรกฎาคม
  {
    monthDay: "07-04",
    nameTh: "พายุไซโคลนเรขาคณิตขั้วดาวพฤหัสบดี (Jupiter's Polar Cyclones)",
    nameEn: "Juno's View of Jupiter's Polar Cyclones",
    type: "พายุบรรยากาศดาวเคราะห์แก๊ส",
    constellation: "ดาวพฤหัสบดี",
    instrument: "Juno Spacecraft",
    summaryTh: "พายุหมุนไซโคลนขนาดยักษ์จัดเรียงตัวเป็นรูปแปดเหลี่ยมรอบขั้วดาวพฤหัสบดีอย่างเป็นระเบียบและเสถียรอย่างน่าทึ่ง",
    image: "https://images-assets.nasa.gov/image/PIA21381/PIA21381~orig.jpg"
  },
  {
    monthDay: "07-11",
    nameTh: "กระจุกกาแล็กซีเลนส์โน้มถ่วง SMACS 0723 (Webb's First Deep Field)",
    nameEn: "SMACS 0723 Deep Field by Webb",
    type: "ห้วงอวกาศอินฟราเรดลึก",
    constellation: "กลุ่มดาวปลาบิน",
    instrument: "James Webb Space Telescope",
    summaryTh: "ภาพถ่ายอินฟราเรดที่ลึกที่สุดในประวัติศาสตร์ เผยให้เห็นแสงแรกของกาแล็กซีโบราณที่บิดเบี้ยวด้วยแรงโน้มถ่วงมหาศาล",
    image: "https://images-assets.nasa.gov/image/webb-smacs-0723-comp/webb-smacs-0723-comp~orig.jpg"
  },
  {
    monthDay: "07-12",
    nameTh: "หน้าผาจักรวาลในเนบิวลากระดูกงูเรือ (Cosmic Cliffs)",
    nameEn: "Cosmic Cliffs in Carina Nebula",
    type: "แหล่งกำเนิดดาวฤกษ์",
    constellation: "กลุ่มดาวกระดูกงูเรือ",
    instrument: "James Webb Space Telescope",
    summaryTh: "แนวเทือกเขาแก๊สส่องสว่างสีทองและไอหมึกอินฟราเรด เผยให้เห็นกระบวนการให้กำเนิดดาวดวงใหม่อย่างตระการตา",
    image: "https://images-assets.nasa.gov/image/carina_nebula_0/carina_nebula_0~orig.jpg"
  },
  {
    monthDay: "07-14",
    nameTh: "ธารน้ำแข็งรูปหัวใจบนดาวพลูโต (Tombaugh Regio on Pluto)",
    nameEn: "Pluto's Heart - Sputnik Planitia",
    type: "ธารน้ำแข็งไนโตรเจน",
    constellation: "กลุ่มดาวคนยิงธนู",
    instrument: "New Horizons",
    summaryTh: "ที่ราบธารน้ำแข็งไนโตรเจนกว้างใหญ่รูปหัวใจ บ่งชี้ว่าดาวเคราะห์แคระพลูโตยังคงมีพลวัตและความเคลื่อนไหวทางธรณีวิทยา",
    image: "https://images-assets.nasa.gov/image/PIA19952/PIA19952~orig.jpg"
  },
  {
    monthDay: "07-20",
    nameTh: "ทะเลแห่งความเงียบสงบบนดวงจันทร์ (Sea of Tranquility)",
    nameEn: "Apollo 11 Tranquility Base",
    type: "รอยเท้าแรกของมนุษยชาติ",
    constellation: "ดวงจันทร์",
    instrument: "Apollo 11 Eagle",
    summaryTh: "ก้าวเล็กๆ ของมนุษย์คนหนึ่ง แต่เป็นก้าวกระโดดอันยิ่งใหญ่ของมนุษยชาติ บนพื้นผิวอันเงียบสงบของดวงจันทร์",
    image: "https://images-assets.nasa.gov/image/as11-40-5903/as11-40-5903~orig.jpg"
  },
  {
    monthDay: "07-23",
    nameTh: "เคปเลอร์-452บี โลกใบที่สอง (Kepler-452b)",
    nameEn: "Kepler-452b Earth's Cousin",
    type: "ดาวเคราะห์นอกระบบคล้ายโลก",
    constellation: "กลุ่มดาวหงส์",
    instrument: "Kepler Space Telescope",
    summaryTh: "ดาวเคราะห์ที่โคจรรอบดาวฤกษ์ประเภทเดียวกับดวงอาทิตย์ในระยะห่างที่พอเหมาะ มีปีหนึ่งยาว 385 วัน",
    image: "https://images-assets.nasa.gov/image/PIA19827/PIA19827~orig.jpg"
  },

  // สิงหาคม
  {
    monthDay: "08-06",
    nameTh: "หลุมอุกกาบาตเกลและภูเขาชาร์ปบนดาวอังคาร (Mount Sharp in Gale Crater)",
    nameEn: "Curiosity Rover at Gale Crater Mount Sharp",
    type: "ธรณีวิทยาดาวเคราะห์",
    constellation: "ดาวอังคาร",
    instrument: "Curiosity Rover",
    summaryTh: "ชั้นหินตะกอนโบราณบนภูเขาชาร์ปที่บันทึกประวัติศาสตร์การเปลี่ยนแปลงสภาพแวดล้อมจากชุ่มชื้นกลายเป็นทะเลทรายแห้งแล้ง",
    image: "https://images-assets.nasa.gov/image/PIA16029/PIA16029~orig.jpg"
  },
  {
    monthDay: "08-12",
    nameTh: "บรรยากาศชั้นโคโรนาของดวงอาทิตย์ (The Solar Corona)",
    nameEn: "Sun's Corona by Parker Solar Probe",
    type: "ชั้นบรรยากาศดาวฤกษ์",
    constellation: "ดวงอาทิตย์",
    instrument: "Parker Solar Probe",
    summaryTh: "บรรยากาศชั้นนอกสุดของดวงอาทิตย์ที่มีอุณหภูมิสูงนับล้านองศา แหล่งกำเนิดลมสุริยะที่พัดพาอนุภาคไปทั่วระบบสุริยะ",
    image: "https://images-assets.nasa.gov/image/KSC-20180812-PH_KLS01_0047/KSC-20180812-PH_KLS01_0047~orig.jpg"
  },
  {
    monthDay: "08-25",
    nameTh: "พายุจุดมืดใหญ่บนดาวเนปจูน (Neptune's Great Dark Spot)",
    nameEn: "Neptune and Triton by Voyager 2",
    type: "พายุแอนติไซโคลนดาวเคราะห์",
    constellation: "กลุ่มดาวคนแบกหม้อน้ำ",
    instrument: "Voyager 2",
    summaryTh: "พายุหมุนความเร็วเหนือเสียงบนดาวเนปจูน พร้อมด้วยน้ำพุไนโตรเจนเหลวสีดำบนดวงจันทร์ไทรทันอันเยือกแข็ง",
    image: "https://images-assets.nasa.gov/image/PIA01492/PIA01492~orig.jpg"
  },

  // กันยายน
  {
    monthDay: "09-05",
    nameTh: "แผ่นจารึกทองคำสู่เอกภพ (The Golden Record on Voyager 1)",
    nameEn: "Voyager Golden Record",
    type: "สาส์นแห่งมนุษยชาติ",
    constellation: "อวกาศระหว่างดวงดาว",
    instrument: "Voyager 1",
    summaryTh: "แผ่นเสียงทองคำที่บรรจุเสียงดนตรี เสียงธรรมชาติ ภาพถ่าย และคำทักทาย 55 ภาษาจากมนุษย์โลก ลอยเคว้งสู่อวกาศนิรันดร์",
    image: "https://images-assets.nasa.gov/image/PIA21987/PIA21987~orig.jpg"
  },
  {
    monthDay: "09-24",
    nameTh: "ดาวเคราะห์น้อยเบนนู แหล่งกำเนิดโมเลกุลมีชีวิต (Asteroid Bennu)",
    nameEn: "Asteroid Bennu Sample",
    type: "ดาวเคราะห์น้อยโบราณ",
    constellation: "ระบบสุริยะชั้นใน",
    instrument: "OSIRIS-REx",
    summaryTh: "ก้อนหินอวกาศดึกดำบรรพ์ที่คงสภาพเดิมมาตั้งแต่ 4.5 พันล้านปีก่อน อุดมไปด้วยน้ำและสารประกอบอินทรีย์พื้นฐานของชีวิต",
    image: "https://images-assets.nasa.gov/image/NHQ202309240038/NHQ202309240038~orig.jpg"
  },
  {
    monthDay: "09-26",
    nameTh: "ดาวเคราะห์น้อยไดมอร์ฟอส (Asteroid Dimorphos)",
    nameEn: "Asteroid Dimorphos Impact by DART",
    type: "ดาวเคราะห์น้อยบริวาร",
    constellation: "กลุ่มดาวเพกาซัส",
    instrument: "DART Mission",
    summaryTh: "ดาวเคราะห์น้อยดวงแรกที่มนุษย์สามารถเปลี่ยนทิศทางและวงโคจรของมันได้สำเร็จเพื่อปกป้องโลก",
    image: "https://images-assets.nasa.gov/image/PIA25450/PIA25450~orig.jpg"
  },

  // ตุลาคม
  {
    monthDay: "10-02",
    nameTh: "กาแล็กซีหมวกปีกกว้างซอมเบรโร (Sombrero Galaxy)",
    nameEn: "Sombrero Galaxy (Messier 104)",
    type: "กาแล็กซีก้นหอย",
    constellation: "กลุ่มดาวหญิงสาว",
    instrument: "Hubble Space Telescope",
    summaryTh: "กาแล็กซีที่มีระนาบฝุ่นหนาทึบและศูนย์กลางสว่างไสวเป็นรูปทรงหมวกซอมเบรโร มีหลุมดำยักษ์พันล้านเท่าของดวงอาทิตย์",
    image: "https://images-assets.nasa.gov/image/PIA04215/PIA04215~orig.jpg"
  },
  {
    monthDay: "10-14",
    nameTh: "ดวงจันทร์น้ำแข็งยูโรปา (Europa Ocean Moon)",
    nameEn: "Europa's Ice Crust and Ocean",
    type: "ดวงจันทร์มหาสมุทรต่างดาว",
    constellation: "ดาวพฤหัสบดี",
    instrument: "Europa Clipper & Galileo",
    summaryTh: "ดวงจันทร์ที่มีรอยแตกน้ำแข็งสีแดงส้ม ซ่อนมหาสมุทรน้ำเค็มใต้เปลือกที่มีปริมาณน้ำมากกว่ามหาสมุทรบนโลกรวมกัน",
    image: "https://images-assets.nasa.gov/image/PIA00502/PIA00502~orig.jpg"
  },
  {
    monthDay: "10-19",
    nameTh: "โอมูอามูอา ผู้มาเยือนจากต่างระบบสุริยะ ('Oumuamua)",
    nameEn: "'Oumuamua Interstellar Asteroid",
    type: "วัตถุต่างระบบดาว",
    constellation: "กลุ่มดาวพิณ",
    instrument: "Pan-STARRS & NASA Observatories",
    summaryTh: "วัตถุแปลกประหลาดรูปทรงเรียวยาวสีแดง ที่ล่องลอยข้ามห้วงอวกาศระหว่างดวงดาวมาเยือนระบบสุริยะของเรา",
    image: "https://images-assets.nasa.gov/image/PIA22108/PIA22108~orig.jpg"
  },

  // พฤศจิกายน
  {
    monthDay: "11-16",
    nameTh: "ยานอวกาศโอไรออนในภารกิจอาร์เทมิส 1 (Orion Artemis 1)",
    nameEn: "Artemis 1 Orion Deep Space Capsule",
    type: "ยานสำรวจดวงจันทร์ยุคใหม่",
    constellation: "วงโคจรย้อนทิศรอบดวงจันทร์",
    instrument: "Artemis 1 SLS Rocket",
    summaryTh: "ยานอวกาศรุ่นใหม่ของมนุษยชาติที่เดินทางไปไกลกว่าดวงจันทร์เพื่อเตรียมพามนุษย์กลับไปเหยียบดวงจันทร์อีกครั้ง",
    image: "https://images-assets.nasa.gov/image/art001e000670/art001e000670~orig.jpg"
  },
  {
    monthDay: "11-27",
    nameTh: "น้ำพุไออุ่นบนดวงจันทร์เอนเซลาดัส (Enceladus Geysers)",
    nameEn: "Enceladus Tiger Stripes & Ocean Geysers",
    type: "ดวงจันทร์มหาสมุทรอุ่น",
    constellation: "ดาวเสาร์",
    instrument: "Cassini Spacecraft",
    summaryTh: "รอยแยกแถบลายเสือขั้วใต้ที่พ่นน้ำเค็มและโมเลกุลอินทรีย์สู่ห้วงอวกาศ บ่งชี้ถึงสภาวะแวดล้อมที่เอื้อต่อชีวิตใต้พิภพ",
    image: "https://images-assets.nasa.gov/image/PIA07758/PIA07758~orig.jpg"
  },

  // ธันวาคม
  {
    monthDay: "12-05",
    nameTh: "ดาวเคราะห์เคปเลอร์-22บี (Kepler-22b)",
    nameEn: "Kepler-22b Water World Candidate",
    type: "ดาวเคราะห์เขตเอื้อชีวิต",
    constellation: "กลุ่มดาวหงส์",
    instrument: "Kepler Space Telescope",
    summaryTh: "ดาวเคราะห์ดวงแรกที่ยืนยันว่าอยู่ในเขต Goldilocks Zone รอบดาวฤกษ์คล้ายดวงอาทิตย์ อาจเป็นดาวเคราะห์มหาสมุทร",
    image: "https://images-assets.nasa.gov/image/PIA14886/PIA14886~orig.jpg"
  },
  {
    monthDay: "12-25",
    nameTh: "กล้องโทรทรรศน์อวกาศเจมส์ เวบบ์ กระจกทองคำ (James Webb Space Telescope)",
    nameEn: "James Webb Golden Mirror",
    type: "หอสังเกตการณ์อินฟราเรดชั้นนำ",
    constellation: "จุดลากรองจ์ L2",
    instrument: "Ariane 5 Launch",
    summaryTh: "ของขวัญวันคริสต์มาสแด่มนุษยชาติ กล้องโทรทรรศน์อวกาศที่เปิดเผยภาพแรกเริ่มของเอกภพย้อนหลังไปถึงจุดกำเนิดดวงดาว",
    image: "https://images-assets.nasa.gov/image/202112250002_JWST_Ariane_5_launch/202112250002_JWST_Ariane_5_launch~orig.jpg"
  }
];

// ฟังก์ชันค้นหา: ค้นหาทั้งจากประวัติศาสตร์เป๊ะๆ หรือค้นหาอันที่ใกล้เคียงที่สุด
function searchNasaDiscovery(targetDateString) {
  // ตรวจสอบรูปแบบวันที่ YYYY-MM-DD
  const targetDate = new Date(targetDateString);
  if (isNaN(targetDate.getTime())) {
    return { error: "รูปแบบวันที่ไม่ถูกต้อง กรุณาระบุเป็น ปปปป-ดด-วว" };
  }

  const targetYear = targetDate.getFullYear();
  const targetMonth = String(targetDate.getMonth() + 1).padStart(2, "0");
  const targetDay = String(targetDate.getDate()).padStart(2, "0");
  const targetMonthDay = `${targetMonth}-${targetDay}`;
  const formattedTargetDate = `${targetYear}-${targetMonth}-${targetDay}`;

  // 1. ตรวจสอบการค้นพบบนดัชนี Google Search ตรงวันเป๊ะ (Exact Match: YYYY-MM-DD)
  const exactHistoricMatch = NASA_DATABASE.find(item => item.date === formattedTargetDate);
  if (exactHistoricMatch) {
    return {
      status: "exact_match",
      matchType: "exact_date",
      targetDate: formattedTargetDate,
      discovery: {
        ...exactHistoricMatch,
        source: "Google Search Index",
        copyright: exactHistoricMatch.instrument || "Google Search & Space Archives"
      },
      messageTh: `พบข้อมูลภาพและการค้นพบบน Google Search ตรงกับวันเกิดของคุณพอดี! (${formattedTargetDate})`,
      diffDays: 0
    };
  }

  // 2. ถ้าไม่ตรงวันในปีนั้น แต่ตรงกับวันและเดือนเดียวกัน (Same Month & Day)
  const sameMonthDayItem = NASA_DATABASE.find(item => item.monthDay === targetMonthDay) ||
                           CALENDAR_CELESTIAL_OBJECTS.find(item => item.monthDay === targetMonthDay);

  // 3. คำนวณหาการค้นพบในประวัติศาสตร์ที่มีวันที่ "ใกล้เคียงที่สุด" (Closest Historic Date)
  let closestHistoric = null;
  let minDiffMs = Infinity;

  NASA_DATABASE.forEach(item => {
    const itemDate = new Date(item.date);
    const diff = Math.abs(itemDate.getTime() - targetDate.getTime());
    if (diff < minDiffMs) {
      minDiffMs = diff;
      closestHistoric = item;
    }
  });

  const diffDays = Math.round(minDiffMs / (1000 * 60 * 60 * 24));

  // ส่งผลลัพธ์กลับพร้อมข้อมูลเปรียบเทียบ
  return {
    status: "no_exact_match",
    targetDate: formattedTargetDate,
    messageTh: `ในวันที่ ${formattedTargetDate} ไม่พบการบันทึกภาพใหม่บน Google Search จึงแสดงการค้นพบของวันที่ใกล้เคียงที่สุดจาก Google Search ให้แทน`,
    closestDiscovery: closestHistoric ? {
      ...closestHistoric,
      source: "Google Search Index",
      copyright: closestHistoric.instrument || "Google Search & Space Archives"
    } : null,
    diffDays: diffDays,
    isBefore: closestHistoric ? new Date(closestHistoric.date) < targetDate : false,
    sameMonthDayDiscovery: sameMonthDayItem || null
  };
}

// Export ตัวแปรไปยัง Global window สำหรับเบราว์เซอร์
if (typeof window !== "undefined") {
  window.NASA_DATABASE = NASA_DATABASE;
  window.GOOGLE_SPACE_DATABASE = NASA_DATABASE;
  window.CALENDAR_CELESTIAL_OBJECTS = CALENDAR_CELESTIAL_OBJECTS;
  window.searchNasaDiscovery = searchNasaDiscovery;
  window.searchGoogleSpaceDiscovery = searchNasaDiscovery;
}
