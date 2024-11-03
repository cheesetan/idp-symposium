import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from './SearchBar.tsx';
import ExhibitionOverlaySheet from './ExhibitionOverlaySheet.tsx';
import ExhibitionItem from './ExhibitionItem.tsx';

const exhibitions = [
  {
    projectId: "ABS-CS 1",
    title: "Floating Mangrove Forest",
    members: [
      "Talam Ma Francesca Deheune De La Peri",
      "Low Jia Shen",
      "Victoria Kate Lee Hui Xin",
      "Kayden Dua Zhen Xuan",
    ],
    organization: "A Builder's Society, City Sprouts",
    synopsis:
      "This project aims to develop concepts for a sustainable floating mangrove island, with a focus on adaptability to various mangrove swamps, allowing it to be readily adoptable by any mangrove swamp around the globe. The floating mangrove island is a series of floating walkways and platforms for both viewing and planting mangroves. It will first be implemented as an extension of West Coast Park's marsh garden for visitors to learn more about mangroves and appreciate the ecosystem, as well as for activities to be held. This project aims to promote the conservation of mangrove ecosystems, as well as public awareness of their importance.",
  },
  {
    projectId: "AFND 2 (Industrial Proj)",
    title: "",
    members: [
      "Fan Yi Xi, Savion",
      "Poon Kar Ngai Lucas",
      "Caden Anthony Fay Teng Aik (Peng Shengyi)",
      "Jayden Ng Kwan Zi (Huang Guangze)",
    ],
    organization: "",
    synopsis: "",
  },
  {
    projectId: "AWWA 2",
    title: "Designing of toy hub for children with special needs",
    members: ["Ng Kian Ping", "Edward Kwek", "Jeremy Neo Kai Hwee"],
    organization: "Asian Women's Welfare Association (AWWA), VIVITA Singapore",
    synopsis:
      "SpecialSpark is a toy brand specially designed to enhance learning yet bring the same level of sensory play and entertainment for children with special needs. The portable toys can be used both in and out of the classroom, allowing the children to participate in engaging games that enhance creativity and cognitive development. The hub helps combine the toys into unique integrated games to further the children’s knowledge and skills on common topics. We aim to improve sensory and motor skills while providing personalized learning experiences tailored to the needs of children with developmental and learning challenges.",
  },
  {
    projectId: "BII 3",
    title: "",
    members: [
      "Jeff Ng",
      "Felix Forbes Dimjati (Fang Yongsheng)",
      "Lee Dong Ze, Zac",
      "Lim Donghwan",
    ],
    organization: "",
    synopsis: "",
  },
  {
    projectId: "DukeNUS 1",
    title:
      "Investigation of the effectiveness of E3 ligase and heat shock protein (HSP) against CGG repeat expansion-induced neurodegeneration in Parkinson's disease.",
    members: ["Tan Teck Han Tristen (Chen Dehan)", "Ryan Kuah Rui Ann"],
    organization: "National Neuroscience Institute (NNI)",
    synopsis:
      "This research examines the therapeutic potential of ubiquitin E3 ligase and heat shock proteins (HSP) in addressing CGG repeat-expansion-induced neurodegeneration in Parkinson’s disease (PD). PD is marked by neurodegeneration in the substantia nigra (SN), where neurons controlling movement reside. The degeneration is linked to PolyGlycine (PolyG) chains produced through CGG repeat expansions, which cause neuronal damage. E3 ligase helps degrade misfolded proteins, while HSPs assist in refolding them. Studying their effects may lead to treatments targeting misfolded proteins like PolyG, reducing the rate of neurodegeneration and improving the quality of life for PD patients.",
  },
  {
    projectId: "FTBT 1",
    title:
      "Designing a set of Loop-mediated isothermal Amplifier (LAMP) primers for testing of Infectious hypodermal and haematopoietic necrosis virus (IHHNV) ",
    members: [
      "Chua Jingtin (Cai Jingting) Ranice",
      "P Sadhanah",
      "Marc Alonso Lim Jia Ying",
    ],
    organization: "Forte Biotech",
    synopsis:
      "Infectious Hypodermal and Hepatopancreatic Necrosis Virus (IHHNV) is the causal viral agent for Runt Deformity Syndrome in Penaeus vannamei. Although there is no effective treatment for IHHNV at the moment, early detection would allow for preventive measures, preventing the spread of IHHNV. Two sets of LAMP primers targeting the capsid protein gene of IHHNV strain ZJ-2014-24 (KU373072), were synthesised after evaluation of several sets of primers. The primers were then tested for their ability to accurately detect the presence of IHHNV. In conclusion, primer set Capsid protein (ID: 72) was successful, while primer set Capsid protein (ID: 92) was not.",
  },
  {
    projectId: "HWN 1",
    title:
      "The creation of digital tools to help the elderly embrace technology.",
    members: [
      "Raphael Lam Chew Ray",
      "Vernon Loh Jin Feng (Luo Jingfeng)",
      "Darius Tan Kaifeng",
      "Ng Jing Zhong",
    ],
    organization: "Heartware Network",
    synopsis:
      "This project aims to help elderly individuals embrace technology by addressing common challenges that they face. Through visits, we identified these issues and developed an app tailored to support seniors in overcoming them. The app includes a library of easy-to-follow instructional videos and a feature that allows seniors to request help from volunteers for personalized assistance. By solving these problems, we hope to encourage the elderly to use technology regularly, improving their quality of life and helping them stay current with technological advancements. Ultimately, the goal is for seniors to embrace and benefit from technology confidently.",
  },
  {
    projectId: "IFN 1",
    title: "",
    members: [
      "Harish Ram Baghavath",
      "Emily Chang Ren Minh",
      "Foo G'ywinn",
      "Nehapatan Rey Alphonsus Macabidang",
    ],
    organization: "Infineon",
    synopsis: "",
  },
  {
    projectId: "KKH 6",
    title: "Improving Children's Intensive Care Unit (CICU) resident education",
    members: [
      "Chay Yu Hung Tristan",
      "Ryan Tung Tze-Jin",
      "Tan Jun Yu Rian",
      "Tay Kai Quan",
    ],
    organization:
      "KK Women's and Children's Hospital (KKH), Singapore Institute of Technology (SIT)",
    synopsis:
      "With medical resources stored and accessed using an intranet system, and dosages calculated using an Excel sheet, the project aims to help medical personnel gain access to medical information and drug information/dosages with minimal delay. The development of the KKH Intensive Care Units CICU mobile app should present user with good readability and clear user interface with accurate formula, manual calculations for healthcare professionals to perform medical attention with ease.",
  },
  {
    projectId: "KKH 7",
    title: "How long must I wait?",
    members: [
      "Dimitros Lim Yi Sheng",
      "Sean Ulric Buguina Chua",
      "Song Jun Hao Jarell",
      "Tan Yi Shen (Chen Yishen)",
    ],
    organization:
      "KK Women's and Children's Hospital (KKH), Singapore Institute of Technology (SIT)",
    synopsis:
      "To alleviate pharmacists' workload and optimise their workflows, we designed a pill-counting device using computer vision. The product features an intuitive UI displayed on a capacitive touch display and a camera, situated above a tray where pills are placed to be counted. To count the pills, the team trained a custom YOLOv8 computer vision model to perform accurate counting. The team also implemented a unique damaged pill and foreign matter detection algorithm to ensure only healthy pills are packed. Ultimately, this improved the pill-dispensing process, thereby decreasing wait times and increase patient satisfaction.",
  },
  {
    projectId: "MGRM 1",
    title: "Optimisation of a Plastic Recycling Machine",
    members: [
      "Klifton Cheng",
      "Natalie Chen Hui Regina Ruzsicska",
      "Lim Yongjie",
    ],
    organization: "Magorium Pte Ltd",
    synopsis:
      "The capstone project aims to optimise a plastic recycling machine while educating young people about the importance of plastic recycling. Students collaborated with Magorium mentors to enhance the machine’s safety, efficiency, and user-friendliness. Key improvements included safety features to prevent plastic escape and a 3D-printed quick-release mould for better injection efficiency. LCD screens were added to display real-time data from VOC and CO2 sensors. Additionally, a 3D-printed filtration system with HEPA and carbon filters was developed to monitor air quality. Regular meetings with mentors provided valuable feedback, leading to creative student innovations and a deeper understanding of sustainability for youths.",
  },
  {
    projectId: "NIE 1",
    title: "Biomedical potential of intertidal marine sponges from Singapore",
    members: [
      "Tham En Jie",
      "Kweh Xiao En Carita",
      "Lee Zheng Ting, Colin",
      "Fera Qairissa Binte Amin",
      "Isabel Ong Li Qi",
    ],
    organization: "National Institute of Education",
    synopsis: "hello",
  },
  {
    projectId: "Nitto 1",
    title: "Sustainable Urban Transportation Solutions Platform",
    members: [
      "Xavier Yap Jun Xian",
      "Lim Yi Ren Eben",
      "Chee Wen Yong",
      "Poon Zhi Ler",
    ],
    organization: "Nitto Denko (Singapore) Pte Ltd",
    synopsis:
      "This investigation explores possible commercial applications of the CO2 captured and released by the IAP system outside the built environment through the production of calcium carbonate, an accelerator for the hardening of concrete. With an extension into storing the carbon dioxide within the built environment for transportation.",
  },
  {
    projectId: "NNI 1",
    title:
      "Exploring the Therapeutic Potential of TRPM4 Blocking Antibody on LPS-Induced Lung Inflammation in Mice",
    members: ["Ho Zheng Feng, Triston A'sen", "Chua Tian Tong, Mickey"],
    organization: "National Neuroscience Institute (NNI)",
    synopsis:
      "Pneumonitis, an inflammatory lung condition which manifests from illnesses such as COVID-19 and H1N1, can evolve into acute respiratory distress syndrome (ARDS), requiring intensive medical intervention. During such diseases, TRPM4 (an ion channel) becomes upregulated, leading to an influx of sodium/chloride ions and, thus, cell death. Our research delves into the therapeutic potential of a TRPM4-blocking antibody (M4P) in protecting lung cell integrity; by testing LPS-induced lung inflammation mice models and quantifying the effects of M4P. This research can help better understand the application of M4P in respiratory illnesses, potentially saving many lives in severe respiratory cases.",
  },
];

const useScrollLock = () => {
  const lockScroll = () => {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
  };

  return [lockScroll, unlockScroll];
};

const ExhibitionsView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExhibition, setSelectedExhibition] = useState(null);
  const [lockScroll, unlockScroll] = useScrollLock();

  const handleOpenExhibition = (exhibition) => {
    lockScroll();
    setSelectedExhibition(exhibition);
  };

  const handleCloseExhibition = () => {
    unlockScroll();
    setSelectedExhibition(null);
  };

  const filteredExhibitions = exhibitions.filter(exhibition => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      exhibition.projectId.toLowerCase().includes(searchTermLower) ||
      exhibition.title.toLowerCase().includes(searchTermLower) ||
      exhibition.organization.toLowerCase().includes(searchTermLower)
    );
  });

  return (
    <div>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <div className="space-y-4">
        <AnimatePresence>
          {filteredExhibitions.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8 text-gray-500"
            >
              No exhibitions found matching your search
            </motion.div>
          ) : (
            filteredExhibitions.map((exhibition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-100 active:bg-gray-50 cursor-pointer"
                onClick={() => handleOpenExhibition(exhibition)}
              >
                <ExhibitionItem exhibition={exhibition} />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedExhibition && (
          <ExhibitionOverlaySheet 
            exhibition={selectedExhibition} 
            onClose={handleCloseExhibition} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExhibitionsView;