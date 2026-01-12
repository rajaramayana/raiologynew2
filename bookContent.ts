
import { Chapter } from './types';

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Introduction",
    content: `Recent technological advances have produced a bewildering array of complex imaging techniques and procedures. The basic principle of imaging, however, remains the anatomical demonstration of a particular region and related abnormalities.
    Principal imaging modalities:
    - Plain X-rays: utilizes a collimated X-ray beam to image chest, abdomen, etc.
    - Fluoroscopy: continuous X-ray beam producing moving images.
    - Ultrasound (US): high-frequency sound waves.
    - Computed Tomography (CT): cross-sectional computerized densities.
    - Magnetic Resonance Imaging (MRI): exploits magnetic properties of hydrogen atoms.
    - Nuclear Medicine (NM): functional detail by gamma radiation detection.
    
    Contrast Media: Substances that assist visualization by X-ray absorption. Examples: Barium sulphate, organic iodine.
    
    Radiation Protection: Doses should be kept to a minimum (ALARA). The fetus is particularly sensitive, especially in the first trimester.`,
    keyPoints: [
      "Imaging modalities: X-ray, Fluoroscopy, US, CT, MRI, NM",
      "Contrast agents: Barium (GI) and Iodine (Vascular/CT)",
      "ALARA principle for radiation protection",
      "Fetal sensitivity to radiation"
    ]
  },
  {
    id: 2,
    title: "Respiratory Tract",
    content: `The standard view used is the posteroanterior (PA) projection. 
    CT is essential for evaluating chest disease, providing detail for localizing mediastinal masses and bronchial neoplasms.
    
    Pneumonia: Inflammatory reaction in lungs. Radiological features include confluent homogeneous shadowing (consolidation) and air bronchograms.
    
    Tuberculosis: Chronic infection by M. tuberculosis. Primary features: Ghon focus with hilar lymphadenopathy. Postprimary: Patchy consolidation in upper lobes, cavitation.
    
    Bronchial Carcinoma: Peripheral vs Central. Peripheral presents as lobulated/spiculated mass. Central causes hilar shadow enlargement and narrowing of bronchial lumen.`,
    keyPoints: [
      "PA view is the standard chest projection",
      "Consolidation and air bronchograms characterize pneumonia",
      "TB presents with Ghon complexes or upper lobe cavities",
      "CT is the gold standard for staging lung cancer"
    ]
  },
  {
    id: 3,
    title: "Cardiovascular System",
    content: `Evaluation includes heart size and chamber enlargement. Cardiothoracic ratio on PA chest should be ≤ 50%.
    
    Cardiomegaly: Ratio over 50%. Specific chambers: Left atrium (double contour heart border), Right ventricle (upward displacement of apex).
    
    Pulmonary Embolus: Mismatched perfusion/ventilation scanning is diagnostic. CTPA is current gold standard.
    
    Aortic Dissection: Tear in aortic wall. CT shows intimal flap. Mechanism: blood penetrates intima and enters media.`,
    keyPoints: [
      "Cardiothoracic ratio ≤ 50% is normal",
      "CTPA is best for detecting Pulmonary Embolism",
      "Intimal flap is pathognomonic for Aortic Dissection",
      "Echocardiography is the first-line for valvular assessment"
    ]
  },
  {
    id: 4,
    title: "Gastrointestinal Tract",
    content: `Plain films are helpful for obstruction, extraluminal gas (pneumoperitoneum), and calcifications.
    
    Barium Studies: Swallow (Oesophagus), Meal (Stomach), Follow-through (Small bowel), Enema (Large bowel).
    
    Oesophageal Carcinoma: Presents as irregular narrowing with mucosal destruction or polypoidal intraluminal mass.
    
    Small Bowel Obstruction: Features include loops > 3cm, valvulae conniventes crossing the entire width.
    
    Ulcerative Colitis: Loss of haustral pattern, lead pipe appearance, shallow ulceration from rectum proximally.`,
    keyPoints: [
      "Valvulae conniventes cross the whole small bowel",
      "Pneumoperitoneum: free air under the diaphragm",
      "Achalasia: bird's beak sign on barium swallow",
      "Lead pipe colon in chronic Ulcerative Colitis"
    ]
  },
  {
    id: 5,
    title: "Liver and Pancreas",
    content: `Ultrasound is the primary modality for gallbladder and biliary tree. 
    
    Gallstones: Only 10% are radiopaque on X-ray. Ultrasound shows echogenic areas with acoustic shadowing.
    
    Pancreatitis: Acute shows oedematous pancreas on CT. Chronic shows calcification (pathognomonic).
    
    Hepatocellular Carcinoma: Most common primary liver tumour, often associated with cirrhosis.`,
    keyPoints: [
      "10% of gallstones are radiopaque",
      "Pancreatic calcification = Chronic Pancreatitis",
      "Ultrasound is first choice for jaundice investigation",
      "Alpha-fetoprotein elevated in 90% of HCC cases"
    ]
  }
];
