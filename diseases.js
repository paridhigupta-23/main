// Sample list of diseases
const diseases = [
  // ===== A =====
  { name: "Asthma", desc: "Chronic lung disease causing breathing difficulties." },
  { name: "Alopecia", desc: "Hair loss due to autoimmune or genetic causes." },
  { name: "Alzheimer's Disease", desc: "Progressive disease destroying memory." },
  { name: "Anemia", desc: "Lack of healthy red blood cells." },
  { name: "Arthritis", desc: "Inflammation of the joints causing pain." },
  { name: "Appendicitis", desc: "Inflammation of the appendix." },
  { name: "Atherosclerosis", desc: "Hardening of arteries due to plaque." },
  { name: "Arrhythmia", desc: "Irregular heartbeat condition." },
  { name: "Astigmatism", desc: "Curved cornea causing blurred vision." },
  { name: "Atopic Dermatitis", desc: "Chronic itchy skin condition." },
  { name: "Autoimmune Hepatitis", desc: "Immune system attacks the liver." },
  { name: "Angina", desc: "Chest pain due to reduced blood flow to heart." },
  { name: "Acne", desc: "Skin condition causing pimples and inflammation." },
  { name: "Achalasia", desc: "Disorder affecting the esophagus muscles." },
  { name: "Amyloidosis", desc: "Protein buildup affecting organs." },

  // ===== B =====
  { name: "Bronchitis", desc: "Inflammation of the bronchial tubes." },
  { name: "Bursitis", desc: "Inflammation of the fluid-filled sacs around joints." },
  { name: "Bipolar Disorder", desc: "Mood disorder with alternating highs and lows." },
  { name: "Botulism", desc: "Rare but serious illness caused by toxins." },
  { name: "Brucellosis", desc: "Bacterial infection from animals." },
  { name: "Burns", desc: "Damage to skin from heat, chemicals, or radiation." },
  { name: "Blepharitis", desc: "Inflammation of the eyelids." },
  { name: "Bronchiectasis", desc: "Permanent enlargement of parts of the airways." },
  { name: "Bradycardia", desc: "Abnormally slow heart rate." },
  { name: "Benign Prostatic Hyperplasia", desc: "Enlarged prostate gland in men." },
  { name: "Barrett's Esophagus", desc: "Changes in esophagus lining due to acid reflux." },
  { name: "Bud-Chiari Syndrome", desc: "Blocked veins in the liver." },
  { name: "Bulimia", desc: "Eating disorder with bingeing and purging." },
  { name: "Bacterial Vaginosis", desc: "Imbalance of bacteria in the vagina." },
  { name: "Bilharzia", desc: "Parasitic infection affecting urinary or intestinal tract." },

  // ===== C =====
  { name: "Cancer", desc: "Uncontrolled growth of abnormal cells in the body." },
  { name: "Chickenpox", desc: "Viral infection causing itchy rash and fever." },
  { name: "Cholera", desc: "Bacterial infection causing severe diarrhea." },
  { name: "Celiac Disease", desc: "Immune reaction to gluten damaging the small intestine." },
  { name: "Chronic Kidney Disease", desc: "Gradual loss of kidney function over time." },
  { name: "COPD", desc: "Chronic obstructive pulmonary disease affecting breathing." },
  { name: "Conjunctivitis", desc: "Inflammation of the eye's outer layer." },
  { name: "Cirrhosis", desc: "Liver scarring due to long-term damage." },
  { name: "Cystic Fibrosis", desc: "Genetic disorder affecting lungs and digestion." },
  { name: "Cardiomyopathy", desc: "Disease of the heart muscle." },
  { name: "Crohn's Disease", desc: "Inflammatory bowel disease affecting digestion." },
  { name: "Creutzfeldt-Jakob Disease", desc: "Rare brain disorder causing dementia." },
  { name: "Cluster Headache", desc: "Severe headache on one side of the head." },
  { name: "Cataract", desc: "Clouding of the eye lens causing vision loss." },
  { name: "Carpal Tunnel Syndrome", desc: "Compression of a nerve in the wrist causing pain." },

  // ===== D =====
  { name: "Diabetes", desc: "High blood sugar caused by insulin problems." },
  { name: "Dengue Fever", desc: "Viral infection spread by mosquitoes." },
  { name: "Depression", desc: "Mood disorder causing persistent sadness." },
  { name: "Dermatitis", desc: "Inflammation of the skin." },
  { name: "Diverticulitis", desc: "Inflammation of pouches in the colon wall." },
  { name: "Diphtheria", desc: "Serious bacterial infection of the nose and throat." },
  { name: "Down Syndrome", desc: "Genetic disorder causing developmental delays." },
  { name: "Dyspnea", desc: "Shortness of breath or difficulty breathing." },
  { name: "Dyslexia", desc: "Learning disorder affecting reading ability." },
  { name: "Deep Vein Thrombosis", desc: "Blood clot in a deep vein, usually in the legs." },
  { name: "Dental Caries", desc: "Tooth decay caused by bacteria." },
  { name: "Dermatomyositis", desc: "Inflammatory disease affecting skin and muscles." },
  { name: "Diabetic Neuropathy", desc: "Nerve damage caused by diabetes." },
  { name: "Disc Herniation", desc: "Slipped or ruptured spinal disc causing pain." },
  { name: "Drug Allergy", desc: "Immune reaction to medications." },
  
  // ===== E =====
  { name: "Eczema", desc: "Inflammation of the skin causing itchiness." },
  { name: "Epilepsy", desc: "Neurological disorder causing seizures." },
  { name: "Endometriosis", desc: "Tissue similar to uterus lining grows outside it." },
  { name: "Encephalitis", desc: "Inflammation of the brain." },
  { name: "Emphysema", desc: "Lung disease causing shortness of breath." },
  { name: "Esophagitis", desc: "Inflammation of the esophagus." },
  { name: "Exophthalmos", desc: "Bulging of the eyes often due to thyroid disease." },
  { name: "Ehrlichiosis", desc: "Tick-borne bacterial infection." },
  { name: "Ear Infection", desc: "Bacterial or viral infection of the ear." },
  { name: "Ebola Virus Disease", desc: "Severe viral hemorrhagic fever." },
  { name: "Erythema Nodosum", desc: "Inflammatory skin condition causing red bumps." },
  { name: "Edema", desc: "Swelling caused by fluid accumulation." },
  { name: "Eye Strain", desc: "Discomfort after prolonged visual tasks." },
  { name: "Exanthema", desc: "Rash usually caused by viral infection." },
  { name: "Eosinophilia", desc: "High number of eosinophils in the blood." },
  
  // ===== F =====
  { name: "Flu", desc: "Influenza virus causing fever and cough." },
  { name: "Fibromyalgia", desc: "Widespread musculoskeletal pain." },
  { name: "Food Poisoning", desc: "Illness from consuming contaminated food." },
  { name: "Fracture", desc: "Break in a bone." },
  { name: "Fever", desc: "Elevated body temperature due to infection." },
  { name: "Fungal Infection", desc: "Infection caused by fungus." },
  { name: "Frostbite", desc: "Damage to skin from extreme cold." },
  { name: "Fatty Liver Disease", desc: "Excess fat buildup in the liver." },
  { name: "Fibroid", desc: "Noncancerous growth in the uterus." },
  { name: "Fuchs Dystrophy", desc: "Eye disease affecting the cornea." },
  { name: "Febrile Seizure", desc: "Seizure caused by high fever in children." },
  { name: "Fahr's Syndrome", desc: "Rare neurological disorder causing calcium deposits in the brain." },
  { name: "Fluorosis", desc: "Damage to teeth or bones due to excess fluoride." },
  { name: "Fanconi Anemia", desc: "Inherited bone marrow failure disorder." },
  { name: "Folliculitis", desc: "Inflammation of hair follicles." },
  // ===== G =====
{ name: "Gout", desc: "Painful joint inflammation caused by uric acid buildup." },
{ name: "Glaucoma", desc: "Eye condition causing optic nerve damage and vision loss." },
{ name: "Gastroenteritis", desc: "Inflammation of the stomach and intestines causing diarrhea." },
{ name: "Gallstones", desc: "Hardened deposits in the gallbladder." },
{ name: "Graves' Disease", desc: "Autoimmune disorder causing overactive thyroid." },
{ name: "Gingivitis", desc: "Inflammation of the gums." },
{ name: "Glandular Fever", desc: "Viral infection causing fatigue and swollen glands." },
{ name: "Gastritis", desc: "Inflammation of the stomach lining." },
{ name: "Guillain-Barre Syndrome", desc: "Rare disorder where the immune system attacks nerves." },
{ name: "Gangrene", desc: "Death of body tissue due to lack of blood flow or infection." },
{ name: "Genital Herpes", desc: "Viral infection causing painful sores in genital area." },
{ name: "GERD", desc: "Acid reflux causing heartburn and irritation." },
{ name: "Glomerulonephritis", desc: "Kidney inflammation affecting filtering units." },
{ name: "Growth Hormone Deficiency", desc: "Insufficient production of growth hormone." },
{ name: "Gastroesophageal Cancer", desc: "Cancer affecting the stomach or esophagus." },

// ===== H =====
{ name: "Hypertension", desc: "Chronic high blood pressure affecting heart and arteries." },
{ name: "Hepatitis A", desc: "Viral liver infection." },
{ name: "Hepatitis B", desc: "Serious viral liver infection spread via blood or body fluids." },
{ name: "Hepatitis C", desc: "Chronic liver infection caused by hepatitis C virus." },
{ name: "Hyperthyroidism", desc: "Overactive thyroid producing excess hormones." },
{ name: "Hypothyroidism", desc: "Underactive thyroid causing fatigue and weight gain." },
{ name: "Hemophilia", desc: "Genetic disorder affecting blood clotting." },
{ name: "Herpes Zoster", desc: "Shingles caused by reactivation of chickenpox virus." },
{ name: "HIV/AIDS", desc: "Virus attacking the immune system." },
{ name: "Heart Attack", desc: "Blockage of blood flow to the heart muscle." },
{ name: "Heart Failure", desc: "Heart unable to pump blood effectively." },
{ name: "Hyperlipidemia", desc: "High levels of fat in the blood." },
{ name: "Hydronephrosis", desc: "Swelling of kidneys due to urine buildup." },
{ name: "Hordeolum", desc: "Stye: infection of eyelid glands." },
{ name: "Hypoglycemia", desc: "Low blood sugar levels." },

// ===== I =====
{ name: "Influenza", desc: "Viral infection causing fever, cough, and body aches." },
{ name: "Impetigo", desc: "Contagious skin infection with sores and blisters." },
{ name: "Irritable Bowel Syndrome", desc: "Digestive disorder causing abdominal pain and bowel changes." },
{ name: "Iron Deficiency", desc: "Low iron causing anemia and fatigue." },
{ name: "Interstitial Cystitis", desc: "Chronic bladder pain and urinary urgency." },
{ name: "Infectious Mononucleosis", desc: "Viral infection causing fever, sore throat, and fatigue." },
{ name: "Ischemic Stroke", desc: "Stroke caused by blocked blood flow to the brain." },
{ name: "Inflammatory Bowel Disease", desc: "Chronic inflammation of the digestive tract." },
{ name: "Ichthyosis", desc: "Skin disorder causing dry, scaly skin." },
{ name: "Immunodeficiency", desc: "Reduced ability to fight infections." },
{ name: "Inguinal Hernia", desc: "Bulging of intestine through abdominal wall." },
{ name: "Intestinal Obstruction", desc: "Blockage preventing passage of contents through intestines." },
{ name: "Interstitial Lung Disease", desc: "Scarring of lung tissue affecting breathing." },
{ name: "Idiopathic Pulmonary Fibrosis", desc: "Progressive scarring of the lungs." },
{ name: "Insomnia", desc: "Difficulty falling or staying asleep." },

// ===== J =====
{ name: "Jaundice", desc: "Yellowing of skin and eyes due to liver problems." },
{ name: "Juvenile Arthritis", desc: "Arthritis affecting children under 16." },
{ name: "Japanese Encephalitis", desc: "Viral brain infection transmitted by mosquitoes." },
{ name: "Joint Dislocation", desc: "Bone forced out of its normal position in a joint." },
{ name: "Jaw Pain", desc: "Pain or discomfort in the jaw area." },
{ name: "Jock Itch", desc: "Fungal infection of groin area." },
{ name: "Juvenile Diabetes", desc: "Type 1 diabetes occurring in children." },
{ name: "Jet Lag", desc: "Temporary sleep disorder from rapid time zone changes." },
{ name: "Jellyfish Sting", desc: "Painful skin reaction caused by jellyfish venom." },
{ name: "Junctional Epidermolysis Bullosa", desc: "Rare genetic skin disorder causing blistering." },
{ name: "Jaw Fracture", desc: "Break in the lower or upper jawbone." },
{ name: "Job Syndrome", desc: "Rare immune disorder causing infections and skin issues." },
{ name: "Juvenile Myoclonic Epilepsy", desc: "Seizure disorder beginning in adolescence." },
{ name: "Jelly Belly Syndrome", desc: "Colloquial name for rare metabolic disorder affecting fat." },

// ===== K =====
{ name: "Kawasaki Disease", desc: "Inflammation of blood vessels in children." },
{ name: "Kidney Stones", desc: "Hard deposits in the kidneys causing pain." },
{ name: "Kyphosis", desc: "Excessive curvature of the spine." },
{ name: "Keloids", desc: "Thick, raised scars that grow excessively." },
{ name: "Keratosis Pilaris", desc: "Rough patches on the skin due to keratin buildup." },
{ name: "Keratitis", desc: "Inflammation of the cornea." },
{ name: "Krabbe Disease", desc: "Rare genetic disorder affecting nervous system." },
{ name: "Klinefelter Syndrome", desc: "Genetic condition in males with extra X chromosome." },
{ name: "Kwashiorkor", desc: "Severe protein deficiency causing swelling." },
{ name: "Kidney Infection", desc: "Infection of one or both kidneys." },
{ name: "Keratoconus", desc: "Thinning and bulging of the cornea." },
{ name: "Korsakoff Syndrome", desc: "Memory disorder caused by chronic alcohol use." },
{ name: "Kaposi Sarcoma", desc: "Cancer causing lesions on skin or organs." },
{ name: "Keratoacanthoma", desc: "Rapidly growing skin tumor." },

// ===== L =====
{ name: "Lupus", desc: "Autoimmune disease attacking healthy tissues." },
{ name: "Leukemia", desc: "Cancer of the blood-forming tissues." },
{ name: "Lyme Disease", desc: "Tick-borne infection causing rash and joint pain." },
{ name: "Laryngitis", desc: "Inflammation of the voice box causing hoarseness." },
{ name: "Liver Cancer", desc: "Malignant growth in the liver." },
{ name: "Legionnaires’ Disease", desc: "Severe form of pneumonia caused by bacteria." },
{ name: "Lymphoma", desc: "Cancer affecting the lymphatic system." },
{ name: "Low Back Pain", desc: "Pain in the lower back region." },
{ name: "Lactose Intolerance", desc: "Difficulty digesting lactose in dairy products." },
{ name: "Leprosy", desc: "Chronic infection affecting skin and nerves." },
{ name: "Lipoma", desc: "Benign fatty tumor under the skin." },
{ name: "Lichen Planus", desc: "Inflammatory skin condition causing itchy lesions." },
{ name: "Leg Cramps", desc: "Sudden, involuntary muscle contractions in legs." },
{ name: "Long QT Syndrome", desc: "Heart rhythm disorder causing fainting or sudden death." },

// ===== M =====
{ name: "Migraine", desc: "Severe recurring headaches often with nausea." },
{ name: "Multiple Sclerosis", desc: "Immune system attacks nerve covering causing weakness." },
{ name: "Measles", desc: "Viral infection causing rash, fever, and cough." },
{ name: "Mumps", desc: "Viral infection causing swollen salivary glands." },
{ name: "Melanoma", desc: "Serious skin cancer from pigment-producing cells." },
{ name: "Myocardial Infarction", desc: "Medical term for a heart attack." },
{ name: "Muscular Dystrophy", desc: "Group of genetic disorders causing muscle weakness." },
{ name: "Malaria", desc: "Parasitic infection spread by mosquitoes." },
{ name: "Meningitis", desc: "Inflammation of the membranes around the brain and spinal cord." },
{ name: "Metabolic Syndrome", desc: "Cluster of conditions increasing risk of heart disease." },
{ name: "Mononucleosis", desc: "Viral infection causing fever, sore throat, and fatigue." },
{ name: "Migraine with Aura", desc: "Headache with sensory disturbances before onset." },
{ name: "Myopia", desc: "Nearsightedness causing blurred distance vision." },
{ name: "Malabsorption", desc: "Poor absorption of nutrients in the intestines." },

// ===== N =====
{ name: "Neuropathy", desc: "Nerve damage causing pain, numbness, or weakness." },
{ name: "Narcolepsy", desc: "Sleep disorder causing excessive daytime sleepiness." },
{ name: "Nausea", desc: "Feeling of sickness with urge to vomit." },
{ name: "Nephritis", desc: "Inflammation of the kidneys." },
{ name: "Non-Hodgkin Lymphoma", desc: "Cancer of the lymphatic system." },
{ name: "Neuralgia", desc: "Intense nerve pain along a nerve pathway." },
{ name: "Night Blindness", desc: "Difficulty seeing in low light." },
{ name: "Nail Fungus", desc: "Fungal infection of fingernails or toenails." },
{ name: "Necrotizing Fasciitis", desc: "Rare bacterial infection destroying tissue." },
{ name: "Nasal Polyps", desc: "Noncancerous growths in nasal lining." },
{ name: "Neurofibromatosis", desc: "Genetic disorder causing tumors on nerves." },
{ name: "Neonatal Jaundice", desc: "Yellowing of newborn’s skin due to bilirubin." },
{ name: "Normal Pressure Hydrocephalus", desc: "Excess cerebrospinal fluid in brain ventricles." },
{ name: "Night Terrors", desc: "Episodes of screaming or fear during sleep." },
{ name: "Nutritional Deficiency", desc: "Lack of essential nutrients in the body." },

// ===== O =====
{ name: "Osteoporosis", desc: "Weakening of bones making them fragile." },
{ name: "Osteoarthritis", desc: "Degeneration of joint cartilage causing pain." },
{ name: "Obesity", desc: "Excess body fat increasing health risks." },
{ name: "Otitis Media", desc: "Middle ear infection causing pain or fever." },
{ name: "Osteomyelitis", desc: "Infection of bone tissue." },
{ name: "Ovarian Cyst", desc: "Fluid-filled sac in the ovary." },
{ name: "Obstructive Sleep Apnea", desc: "Breathing stops repeatedly during sleep." },
{ name: "Otitis Externa", desc: "Infection of the outer ear canal." },
{ name: "Oral Cancer", desc: "Malignant growth in the mouth." },
{ name: "Osteosarcoma", desc: "Bone cancer usually affecting long bones." },
{ name: "Osteopenia", desc: "Lower than normal bone density." },
{ name: "OCD", desc: "Obsessive-compulsive disorder causing repetitive behaviors." },
{ name: "Optic Neuritis", desc: "Inflammation of the optic nerve." },
{ name: "Ornithosis", desc: "Bacterial infection transmitted from birds." },
// ===== P =====
{ name: "Pneumonia", desc: "Lung infection causing cough, fever, and difficulty breathing." },
{ name: "Psoriasis", desc: "Chronic skin condition causing red, scaly patches." },
{ name: "Parkinson's Disease", desc: "Neurodegenerative disorder affecting movement." },
{ name: "Peptic Ulcer", desc: "Open sores in the stomach or upper intestine lining." },
{ name: "Polio", desc: "Viral infection that can cause paralysis." },
{ name: "Pancreatitis", desc: "Inflammation of the pancreas causing abdominal pain." },
{ name: "Pleurisy", desc: "Inflammation of the lining around the lungs." },
{ name: "Peripheral Artery Disease", desc: "Narrowed arteries reducing blood flow to limbs." },
{ name: "Pulmonary Fibrosis", desc: "Scarring of lung tissue affecting breathing." },
{ name: "Pernicious Anemia", desc: "Vitamin B12 deficiency causing low red blood cells." },
{ name: "Prostate Cancer", desc: "Cancer of the prostate gland in men." },
{ name: "Plantar Fasciitis", desc: "Inflammation of tissue under the foot causing heel pain." },
{ name: "Polycystic Ovary Syndrome", desc: "Hormonal disorder affecting women’s ovaries." },
{ name: "Pemphigus", desc: "Rare autoimmune skin disease causing blisters." },
{ name: "Pituitary Tumor", desc: "Abnormal growth in the pituitary gland." },

// ===== Q =====
{ name: "Q Fever", desc: "Bacterial infection spread by animals causing fever." },
{ name: "Quadriplegia", desc: "Paralysis affecting all four limbs." },
{ name: "Queyrat Erythroplasia", desc: "Rare pre-cancerous lesion on genital skin." },
{ name: "Quinsy", desc: "Peritonsillar abscess causing severe throat pain." },
{ name: "QT Prolongation", desc: "Heart rhythm disorder causing irregular heartbeat." },
{ name: "Qatar Fever", desc: "Colloquial name for localized fever illness." },
{ name: "Quickening Syndrome", desc: "Rare metabolic disorder affecting movement." },
{ name: "Quinsy Tonsillitis", desc: "Complication of tonsillitis with pus around tonsils." },
{ name: "Quadriceps Tear", desc: "Muscle tear in the front thigh." },
{ name: "Quantum Neuropathy", desc: "Rare nerve disorder affecting motor control." },
{ name: "Qinghaosu Malaria", desc: "Severe malaria treated with artemisinin." },
{ name: "Quadrantanopia", desc: "Partial loss of vision in a quadrant of visual field." },
{ name: "Quickening Disorder", desc: "Rare developmental condition affecting infants." },
{ name: "Quarantine Syndrome", desc: "Psychological stress caused by prolonged isolation." },
{ name: "Quintuplet Disorder", desc: "Genetic condition seen in rare multiple births." },

// ===== R =====
{ name: "Rheumatoid Arthritis", desc: "Autoimmune disease causing joint inflammation." },
{ name: "Rabies", desc: "Viral infection transmitted through animal bites." },
{ name: "Rosacea", desc: "Chronic skin condition causing facial redness." },
{ name: "Rickets", desc: "Bone softening due to vitamin D deficiency." },
{ name: "Respiratory Syncytial Virus", desc: "Virus causing respiratory infections in infants." },
{ name: "Retinitis Pigmentosa", desc: "Genetic disorder causing vision loss." },
{ name: "Ruptured Appendix", desc: "Serious complication of appendicitis." },
{ name: "Raynaud's Disease", desc: "Blood vessel disorder causing fingers/toes to turn white/blue." },
{ name: "Rhinitis", desc: "Inflammation of nasal mucous causing runny nose." },
{ name: "Rotavirus Infection", desc: "Viral infection causing diarrhea in children." },
{ name: "Rhabdomyolysis", desc: "Muscle breakdown releasing harmful substances into blood." },
{ name: "Reactive Arthritis", desc: "Joint inflammation triggered by infection elsewhere." },
{ name: "Restless Leg Syndrome", desc: "Urge to move legs, often at night." },
{ name: "Renal Failure", desc: "Kidneys fail to filter waste effectively." },
{ name: "Rocky Mountain Spotted Fever", desc: "Tick-borne bacterial infection causing rash and fever." },

// ===== S =====
{ name: "Stroke", desc: "Interruption of blood flow to the brain causing damage." },
{ name: "Schizophrenia", desc: "Chronic mental disorder affecting thinking and perception." },
{ name: "Sinusitis", desc: "Inflammation of the sinuses causing congestion." },
{ name: "Scoliosis", desc: "Abnormal sideways curvature of the spine." },
{ name: "Sepsis", desc: "Body’s extreme response to infection causing organ failure." },
{ name: "Skin Cancer", desc: "Malignant growth on the skin." },
{ name: "Sleep Apnea", desc: "Interrupted breathing during sleep." },
{ name: "Strep Throat", desc: "Bacterial infection causing sore throat and fever." },
{ name: "Salmonella Infection", desc: "Bacterial food poisoning causing diarrhea." },
{ name: "Spinal Stenosis", desc: "Narrowing of spinal canal causing nerve pain." },
{ name: "Shingles", desc: "Painful rash caused by reactivated chickenpox virus." },
{ name: "Sickle Cell Anemia", desc: "Genetic blood disorder affecting hemoglobin." },
{ name: "Sjogren's Syndrome", desc: "Autoimmune disease affecting moisture-producing glands." },
{ name: "Sarcoidosis", desc: "Inflammatory disease forming lumps in organs." },
{ name: "Swine Flu", desc: "Influenza virus infection originating from pigs." },

// ===== T =====
{ name: "Tuberculosis", desc: "Bacterial infection mainly affecting the lungs." },
{ name: "Tonsillitis", desc: "Inflammation of the tonsils causing sore throat." },
{ name: "Thyroid Cancer", desc: "Malignant growth in the thyroid gland." },
{ name: "Tetanus", desc: "Bacterial infection causing muscle stiffness." },
{ name: "Trauma", desc: "Physical injury or wound to the body." },
{ name: "Tachycardia", desc: "Abnormally fast heart rate." },
{ name: "Testicular Cancer", desc: "Cancer of the testicles in men." },
{ name: "Toxic Shock Syndrome", desc: "Rare life-threatening bacterial infection." },
{ name: "Tinnitus", desc: "Ringing or buzzing noise in the ears." },
{ name: "Thrombocytopenia", desc: "Low platelet count causing bleeding issues." },
{ name: "Tourette Syndrome", desc: "Neurological disorder causing involuntary tics." },
{ name: "Trigeminal Neuralgia", desc: "Severe facial nerve pain." },
{ name: "Typhoid Fever", desc: "Bacterial infection causing high fever and weakness." },
{ name: "Toxic Epidermal Necrolysis", desc: "Severe skin reaction to medications." },
{ name: "Trichomoniasis", desc: "Sexually transmitted parasitic infection." },

// ===== U =====
{ name: "Urinary Tract Infection", desc: "Infection of the urinary system causing pain or burning." },
{ name: "Uveitis", desc: "Inflammation of the eye’s uvea." },
{ name: "Ulcerative Colitis", desc: "Chronic inflammation causing ulcers in the colon." },
{ name: "Uremia", desc: "High waste levels in blood due to kidney failure." },
{ name: "Urticaria", desc: "Hives: itchy red welts on the skin." },
{ name: "Ulnar Nerve Entrapment", desc: "Compression of ulnar nerve causing hand weakness." },
{ name: "Undescended Testes", desc: "Condition where testes fail to descend in infants." },
{ name: "Umbilical Hernia", desc: "Bulging of intestine through the belly button." },
{ name: "Upper Respiratory Infection", desc: "Infection affecting nose, throat, and airways." },
{ name: "Ureteral Stones", desc: "Stones blocking urine flow from kidneys." },
{ name: "Ulnar Collateral Ligament Injury", desc: "Injury to ligament in elbow." },
{ name: "Urinary Incontinence", desc: "Loss of bladder control." },
{ name: "Uterine Fibroids", desc: "Noncancerous growths in the uterus." },
{ name: "Urethritis", desc: "Inflammation of the urethra." },

// ===== V =====
{ name: "Varicose Veins", desc: "Enlarged, twisted veins usually in legs." },
{ name: "Viral Hepatitis", desc: "Liver infection caused by various viruses." },
{ name: "Vertigo", desc: "Sensation of spinning or dizziness." },
{ name: "Vasculitis", desc: "Inflammation of blood vessels." },
{ name: "Vaginitis", desc: "Inflammation of the vagina." },
{ name: "Vitamin Deficiency", desc: "Lack of essential vitamins causing health problems." },
{ name: "Varicella", desc: "Chickenpox viral infection." },
{ name: "Ventricular Fibrillation", desc: "Life-threatening heart rhythm disorder." },
{ name: "Vulvovaginitis", desc: "Inflammation of vulva and vagina." },
{ name: "Ventriculitis", desc: "Inflammation of brain ventricles." },
{ name: "Vasovagal Syncope", desc: "Fainting due to sudden drop in heart rate/blood pressure." },
{ name: "Vitreous Detachment", desc: "Separation of the eye’s vitreous from the retina." },
{ name: "Variegate Porphyria", desc: "Rare genetic disorder affecting blood." },
{ name: "Vulvar Cancer", desc: "Cancer affecting the external female genitalia." },

// ===== W =====
{ name: "Whooping Cough", desc: "Bacterial infection causing severe coughing fits." },
{ name: "Warts", desc: "Small, rough growths on skin caused by virus." },
{ name: "Wilson's Disease", desc: "Genetic disorder causing copper buildup in liver." },
{ name: "Weakness", desc: "Loss of muscle strength." },
{ name: "Wegener's Granulomatosis", desc: "Rare disease causing inflammation of blood vessels." },
{ name: "West Nile Virus", desc: "Mosquito-borne viral infection affecting nervous system." },
{ name: "Whiplash", desc: "Neck injury due to sudden movement." },
{ name: "Wound Infection", desc: "Bacterial infection of a cut or injury." },
{ name: "Wolff-Parkinson-White Syndrome", desc: "Heart rhythm disorder causing rapid heartbeat." },
{ name: "Waterborne Illness", desc: "Infection caused by contaminated water." },
{ name: "White Matter Disease", desc: "Degeneration of brain’s white matter." },
{ name: "Wernicke-Korsakoff Syndrome", desc: "Memory disorder caused by vitamin B1 deficiency." },
{ name: "Walking Pneumonia", desc: "Mild form of pneumonia." },
{ name: "Wiskott-Aldrich Syndrome", desc: "Rare immune disorder causing bleeding and infections." },
{ name: "Werner Syndrome", desc: "Genetic disorder causing premature aging." },

// ===== X =====
{ name: "Xeroderma Pigmentosum", desc: "Genetic disorder causing extreme sensitivity to UV light." },
{ name: "X-linked Agammaglobulinemia", desc: "Immune deficiency due to absent antibodies." },
{ name: "Xanthoma", desc: "Fatty deposits under the skin." },
{ name: "Xerophthalmia", desc: "Severe dryness of the eyes due to vitamin A deficiency." },
{ name: "Xanthelasma", desc: "Yellowish deposits around the eyelids." },
{ name: "X-linked Myopathy", desc: "Genetic muscle weakness disorder." },
{ name: "Xerosis", desc: "Abnormally dry skin." },
{ name: "X-linked Hypophosphatemia", desc: "Genetic disorder causing low phosphate and weak bones." },
{ name: "Xenobiotic Toxicity", desc: "Harmful effect of foreign substances in the body." },
{ name: "Xeroderma", desc: "Chronic dry skin condition." },
{ name: "Xiphoidalgia", desc: "Pain in the xiphoid process of the sternum." },
{ name: "Xanthinuria", desc: "Rare metabolic disorder causing high xanthine in urine." },
{ name: "Xerophthalmic Keratopathy", desc: "Eye disease due to extreme dryness." },
{ name: "X-linked Lymphoproliferative Disorder", desc: "Immune system disorder affecting males." },

// ===== Y =====
{ name: "Yellow Fever", desc: "Viral infection causing fever and jaundice." },
{ name: "Yaws", desc: "Bacterial infection affecting skin, bones, and joints." },
{ name: "Yersiniosis", desc: "Bacterial infection causing diarrhea and fever." },
{ name: "Yeast Infection", desc: "Fungal infection affecting mucous membranes." },
{ name: "Yolk Sac Tumor", desc: "Rare cancer usually in ovaries or testes." },
{ name: "Yamaguchi Syndrome", desc: "Rare genetic heart disorder." },
{ name: "Yellow Nail Syndrome", desc: "Disorder causing yellow nails and respiratory issues." },
{ name: "Yersinia Pestis Infection", desc: "Bacterial infection causing plague." },
{ name: "Youth-Onset Diabetes", desc: "Type 1 diabetes diagnosed in children/teens." },
{ name: "Yolk Sac Deficiency", desc: "Rare metabolic disorder in infants." },
{ name: "Yamaguchi Disease", desc: "Rare inflammatory condition." },
{ name: "Yeast Overgrowth", desc: "Excessive fungal growth in body." },
{ name: "Yersinia Enterocolitica Infection", desc: "Bacterial gastrointestinal infection." },
{ name: "Yellow Fever Virus Infection", desc: "Viral infection transmitted by mosquitoes." },

// ===== Z =====
{ name: "Zika Virus", desc: "Viral infection spread by mosquitoes causing fever and rash." },
{ name: "Zollinger-Ellison Syndrome", desc: "Rare condition causing excess stomach acid." },
{ name: "Zoster", desc: "Shingles caused by reactivated varicella virus." },
{ name: "Zinc Deficiency", desc: "Lack of zinc affecting growth and immunity." },
{ name: "Zygomycosis", desc: "Rare fungal infection affecting sinuses and lungs." },
{ name: "Zona Pellucida Antibodies", desc: "Immune response affecting egg fertilization." },
{ name: "Zollinger Disease", desc: "Gastric disorder causing ulcers." },
{ name: "Zollinger Syndrome", desc: "Condition causing excess gastric acid." },
{ name: "Zygomatic Fracture", desc: "Break in the cheekbone." },
{ name: "Zollinger-Ellison Tumor", desc: "Tumor in pancreas or duodenum causing acid overproduction." },
{ name: "Zoonotic Disease", desc: "Disease transmitted from animals to humans." },
{ name: "Zika Microcephaly", desc: "Birth defect caused by Zika virus." },
{ name: "Zinc Toxicity", desc: "Excess zinc causing nausea and weakness." },
{ name: "Zoophobia", desc: "Fear of animals." },
{ name: "Zygomycosis Infection", desc: "Severe fungal infection of tissues." },


];


const lettersContainer = document.querySelector(".letters");
const diseasesContainer = document.querySelector(".diseases");
const searchInput = document.getElementById("diseaseSearch");
const searchBtn = document.getElementById("searchBtn");

// Generate A-Z buttons
for (let i = 65; i <= 90; i++) {
  const letter = String.fromCharCode(i);
  const btn = document.createElement("button");
  btn.textContent = letter;
  btn.addEventListener("click", () => filterByLetter(letter));
  lettersContainer.appendChild(btn);
}

// Display diseases (single function for everything)
function displayDiseases(list) {
  diseasesContainer.innerHTML = ""; // clear previous
  if (list.length === 0) {
    diseasesContainer.innerHTML = "<p>No diseases found.</p>";
    return;
  }
  list.forEach(d => {
    const card = document.createElement("div");
    card.className = "disease-card";
    card.innerHTML = `<h3>${d.name}</h3><p>${d.desc}</p>`;
    diseasesContainer.appendChild(card);
  });
}

// Filter by alphabet letter
function filterByLetter(letter) {
  const filtered = diseases.filter(d => d.name.toUpperCase().startsWith(letter));
  displayDiseases(filtered);
}

// Filter by search keyword
function filterByKeyword(keyword) {
  const filtered = diseases.filter(d => d.name.toLowerCase().includes(keyword.toLowerCase()));
  displayDiseases(filtered);
}
// Initial display
displayDiseases(diseases);
function toggleTheme(){
  document.body.classList.toggle("dark");

  // Save preference
  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
  } else {
    localStorage.setItem("theme","light");
  }
}

// Load saved theme
window.onload = function(){
  if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
  }
}
document.getElementById("searchBtn").addEventListener("click", function(){

  try {
    let input = document.getElementById("diseaseSearch").value.trim();

    if(input === "") throw "Search box is empty ❌";

    let filtered = diseases.filter(d =>
      d.name.toLowerCase().includes(input.toLowerCase())
    );

    if(filtered.length === 0) throw "No disease found ❌";

    displayDiseases(filtered);

  } catch(err){
    alert(err);
  }

});
