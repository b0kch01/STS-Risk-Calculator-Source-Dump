// Manual changes:
// These were made because what was asked for deviates from the spec and the sql
// In the future, requested changes could be made in the excel sheet, then parsed to the sql
//
// Change display name "Timing" to "Heart Failure Timing"
// Move "cva", "cvawhen", "cvdstenrt", and "cvdstenlft" to below "cvdtia"
// Change parents of "cvdstenrt" and "cvdstenlft" to shortname: "cvd" and code: "1"


export const FIELDS: object =
{
    "age": {
        "longname": "Patient Age",
        "definition": "Indicate the patient's age in years, at time of surgery. This should be calculated from the date of birth and the date of surgery, according to the convention used in the USA (the number of birthdate anniversaries reached by the date of surgery). If age is less than 18, the data record will be accepted into the database, but will not be included in the national analysis and report.",
        "low": "1",
        "high": "110",
        "harvest": null,
        "format": "Integer",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "gender": {
        "longname": "Sex",
        "definition": "Indicate the patient's sex at birth as either male or female.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Male"
            },
            {
                "code": "2",
                "text": "Female"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "raceasian": {
        "longname": "Race - Asian",
        "definition": "Indicate whether the patient's race, as determined by the patient or family, includes Asian. \"Asian\" refers to a person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam. It includes people who indicated their race(s) as \"Asian\" or reported entries such as \"Asian Indian\", \"Chinese\", \"Filipino\", \"Korean\", \"Japanese\", \"Vietnamese\", and \"Other Asian\" or provided other detailed Asian responses. [The 2010 Census Redistricting Data (Public Law 94-171) Summary File]",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "raceblack": {
        "longname": "Race - Black / African American",
        "definition": "Indicate whether the patient's race, as determined by the patient or family, includes Black / African American. \"Black or African American\" refers to a person having origins in any of the Black racial groups of Africa. It includes people who indicated their race(s) as \"Black, African Am., or Negro\" or reported entries such as African American, Kenyan, Nigerian, or Haitian. [The 2010 Census Redistricting Data (Public Law 94-171) Summary File]",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "racenativeam": {
        "longname": "Race - American Indian / Alaskan Native",
        "definition": "Indicate whether the patient's race, as determined by the patient or family, includes American Indian / Alaskan Native. \"American Indian or Alaska Native\" refers to a person having origins in any of the original peoples of North and South America (including Central America) and who maintains tribal affiliation or community attachment. This category includes people who indicated their race(s) as \"American Indian or Alaska Native\" or reported their enrolled or prin¬cipal tribe, such as Navajo, Blackfeet, Inupiat, Yup'ik, or Central American Indian groups or South American Indian groups. [The 2010 Census Redistricting Data (Public Law 94-171) Summary File]",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "racnativepacific": {
        "longname": "Race - Native Hawaiian / Pacific Islander",
        "definition": "Indicate whether the patient's race, as determined by the patient or family, includes Native Hawaiian / Pacific Islander. \"Native Hawaiian or Other Pacific Islander\" refers to a person having origins in any of the original peoples of Hawaii, Guam, Samoa, or other Pacific Islands. It includes people who indicated their race(s) as \"Pacific Islander\" or reported entries such as \"Native Hawaiian\", \"Guamanian or Chamorro\", \"Samoan\", and \"Other Pacific Islander\" or provided other detailed Pacific Islander responses. [The 2010 Census Redistricting Data (Public Law 94-171) Summary File]",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "ethnicity": {
        "longname": "Hispanic or Latino or Spanish Ethnicity",
        "definition": "Indicate if the patient is of Hispanic, Latino or Spanish ethnicity as reported by the patient / family. \"Hispanic, Latino or Spanish\" refers to a person of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin regardless of race. [The 2010 Census Redistricting Data (Public Law 94-171) Summary File]",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Not Documented"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "payorprim": {
        "longname": "Primary Payor",
        "definition": "Indicate the primary insurance payor at time of arrival.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "None / self"
            },
            {
                "code": "2",
                "text": "Medicare (includes commercially managed options)"
            },
            {
                "code": "3",
                "text": "Medicaid (includes commercially managed options)"
            },
            {
                "code": "9",
                "text": "Commercial Health Insurance"
            },
            {
                "code": "10",
                "text": "Health Maintenance Organization"
            },
            {
                "code": "4",
                "text": "Military"
            },
            {
                "code": "11",
                "text": "Non-U.S. Plan"
            },
            {
                "code": "13",
                "text": "Other"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "commngmedplnprim",
            "primmcareffs",
            "payorsecond"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "payorsecond": {
        "longname": "Secondary (Supplemental) Payor",
        "definition": "Indicate which if any secondary insurance payor the patient had at time of arrival.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "None / self"
            },
            {
                "code": "2",
                "text": "Medicare (includes commercially managed options)"
            },
            {
                "code": "3",
                "text": "Medicaid (includes commercially managed options)"
            },
            {
                "code": "9",
                "text": "Commercial Health Insurance"
            },
            {
                "code": "10",
                "text": "Health Maintenance Organization"
            },
            {
                "code": "4",
                "text": "Military"
            },
            {
                "code": "11",
                "text": "Non-U.S. Plan"
            },
            {
                "code": "13",
                "text": "Other"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "commngmedplnsec",
            "secondmcareffs"
        ],
        "parent": {
            "shortname": "payorprim",
            "code": "<>1 And Is Not Missing"
        },
        "selected": null
    },
    "surgdt": {
        "longname": "Date of Surgery",
        "definition": "Indicate the date of index cardiac surgical procedure. Index cardiac surgical procedure is defined as the initial major cardiac surgical procedure of the hospitalization.",
        "low": null,
        "high": null,
        "harvest": null,
        "format": "Date mm/dd/yyyy",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "weightkg": {
        "longname": "Weight (kg)",
        "definition": "Indicate the weight of the patient in kilograms closest to time of OR entry for index procedure.",
        "low": "10.0",
        "high": "250.0",
        "harvest": null,
        "format": "Real",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "heightcm": {
        "longname": "Height (cm)",
        "definition": "Indicate the height of the patient in centimeters closest to time of OR entry for index procedure.",
        "low": "20.0",
        "high": "251.0",
        "harvest": null,
        "format": "Real",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "calculatedbmi": {
        "longname": "Calculated BMI",
        "definition": "System calculated BMI ",
        "low": "0.0",
        "high": "200.0",
        "harvest": null,
        "format": "Real",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "hct": {
        "longname": "Hematocrit",
        "definition": "Indicate the pre-operative Hematocrit level at the date and time closest to surgery but prior to anesthetic management (induction area or operating room). Capture only measured hematocrit levels, not calculated values.",
        "low": "1.00",
        "high": "99.99",
        "harvest": null,
        "format": "Real",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "wbc": {
        "longname": "WBC Count",
        "definition": "Indicate the pre-operative White Blood Cell (WBC) count closest to the date and time prior to surgery but prior to anesthetic management (induction area or operating room).",
        "low": "0.10",
        "high": "99.99",
        "harvest": null,
        "format": "Real",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "platelets": {
        "longname": "Platelet Count",
        "definition": "Indicate the platelet count closest to the date and time prior to surgery but prior to anesthetic management (induction area or operating room).",
        "low": "1000",
        "high": "900000",
        "harvest": null,
        "format": "Integer",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "creatlst": {
        "longname": "Last Creatinine Level",
        "definition": "Indicate the creatinine level closest to the date and time prior surgery but prior to anesthetic management (induction area or operating room).<br><br>A creatinine level should be collected on all patients, even if they have no prior history of renal disease. A creatinine value is a high predictor of a patient's outcome and is used in the predicted risk models.",
        "low": "0.10",
        "high": "30.00",
        "harvest": null,
        "format": "Real",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "dialysis": {
        "longname": "RF-Renal Fail-Dialysis",
        "definition": "Indicate whether the patient is currently (prior to surgery) undergoing dialysis on a routine basis.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "hypertn": {
        "longname": "RF-Hypertension",
        "definition": "Indicate if the patient has a current diagnosis of hypertension defined by any 1 of the following:<br>* History of hypertension diagnosed and treated with medication, diet, and/or exercise<br>* Currently undergoing pharmacological therapy for treatment of hypertension<br>2017 ACC / AHA / AAPA / ABC / ACPM / AGS / APhA / ASH / ASPC / NMA / PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults: A Report of the American College of Cardiology/American Heart Association Task Force on Clinical Practice Guidelines. J Am Coll Cardiol 2018;71:e127-e248.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "immsupp": {
        "longname": "Immunocompromised Present",
        "definition": "Indicate whether immunocompromise is present due to immunosuppressive medication therapy within 30 days preceding the operative procedure or existing medical condition (see training manual).",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "pvd": {
        "longname": "Peripheral Artery Disease",
        "definition": "Indicate whether the patient has a documented history of peripheral arterial disease (includes upper and lower extremity, renal, mesenteric, and abdominal aortic systems). This can include:<br>1. Claudication , either with exertion or at rest,<br>2. Amputation for arterial vascular insufficiency,<br>3. Vascular reconstruction, bypass surgery, or percutaneous intervention to the extremities (excluding dialysis fistulas and vein stripping),<br>4. Documented abdominal aortic aneurysm with or without repair. <br>5. Documented subclavian artery stenosis. <br>Peripheral arterial disease excludes disease in the carotid, cerebrovascular arteries or thoracic aorta.<br>PVD does not include DVT, pulmonary artery aneurysm, Raynaud's Disease or AVM.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "cvd": {
        "longname": "Cerebrovascular Disease",
        "definition": "Indicate whether the patient has a current or previous history of any of the following:<br>a. Stroke: Stroke is an acute episode of focal or global neurological dysfunction caused by brain, spinal cord, or retinal vascular injury as a result of hemorrhage or infarction, where the neurological dysfunction lasts for greater than 24 hours.<br>B. TIA: is defined as a transient episode of focal neurological dysfunction caused by brain, spinal cord, or retinal ischemia, without acute infarction, where the neurological dysfunction resolves within 24 hours.<br>C. Noninvasive or invasive arterial imaging test demonstrating >=50% stenosis of any of the major extracranial or intracranial vessels to the  brain <br>D. Veterbral artery and internal carotid and intercranial consistent with atherosclerotic disease with document presence as CVD. External carotid disease is excluded.<br>E. Previous cervical or cerebral artery revascularization surgery or percutaneous intervention F. Brain/cerebral aneurysm. G. Occlusion of veterbral artery, internal carotid artery, and intercranial due to dissection.<br>This does not include chronic (nonvascular) neurological diseases or other acute neurological insults such as metabolic and anoxic ischemic encephalopathy. Subdural hematoma or AVM is not cerebral vascular disease.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "cva",
            "cvdtia",
            "cvdcarsten",
            "cvdpcarsurg"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "cvdtia": {
        "longname": "CVD TIA",
        "definition": "Indicate whether the patient has a history of a Transient Ischemic Attack (TIA). Transient ischemic attack (TIA) is defined as a transient episode of focal neurological dysfunction caused by brain, spinal cord, or retinal ischemia, without acute infarction, where the neurological dysfunction resolves within 24 hours.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": "cvd",
            "code": "1"
        },
        "selected": null
    },
    "cvdpcarsurg": {
        "longname": "CVD Prior Carotid Surgery",
        "definition": "Indicate whether the patient has a history of previous carotid artery surgery and/or stenting.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": "cvd",
            "code": "1"
        },
        "selected": null
    },
    "mediastrad": {
        "longname": "Mediastinal Radiation",
        "definition": "Indicate whether patient has a history of radiation therapy to the mediastinum or chest.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "cancer": {
        "longname": "Cancer Within 5 Years",
        "definition": "Indicate whether the patient has a history of cancer diagnosed within 5 years of procedure. Do not capture low grade skin cancers such as basal cell or squamous cell carcinoma.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "fhcad": {
        "longname": "RF-Family History of Premature CAD",
        "definition": "Indicate if the patient has any direct blood relatives (parents, siblings, children) who have had any of the following at age<br><55 y for male relatives or <65 y for female relatives:<br>* Angina<br>* Acute MI<br>* Sudden cardiac death without obvious cause<br>* CABG surgery<br>* PCI",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "slpapn": {
        "longname": "RF-Sleep Apnea",
        "definition": "Indicate whether patient has a diagnosis of sleep apnea (may be described as obstructive sleep apnea or OSA).",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "liverdis": {
        "longname": "RF-Liver Disease",
        "definition": "Indicate whether the patient has a history of hepatitis B, hepatitis C, drug induced hepatitis, auto-immune hepatitis, cirrhosis, portal hypertension, esophageal varices, liver transplant, or congestive hepatopathy. Exclude NASH in the absence of cirrhosis.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "livertranslist",
            "liverstatuspost"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "unrespstat": {
        "longname": "Unresponsive State",
        "definition": "Indicate whether the patient has a history of non-medically induced, unresponsive state within 24 hours of the time of surgery. Patient experienced complete mental unresponsiveness and no evidence of psychological or physiologically appropriate responses to stimulation, includes patients who experience sudden cardiac death.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "syncope": {
        "longname": "Syncope",
        "definition": "Indicate whether the patient had a sudden loss of consciousness with loss of postural tone, not related to anesthesia, with spontaneous recovery and believed to be related to cardiac condition. Capture events occurring within the past one year as reported by patient or observer. Patient may experience syncope when supine.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "diabetes": {
        "longname": "RF-Diabetes",
        "definition": "History of diabetes diagnosed and/or treated by a healthcare provider. <br><br>Hemoglobin A1c >=6.5% is indicative of diabetes. Please refer your healthcare providers to the 2017 ADA Standards of Medical Care in Diabetes. <br><br>2017 American Diabetes Association Standards of Medicare Care in Diabetes - 2017. Diabetes Care. 40 (Suppl.1) :S13. https://professional.diabetes.org/sites/professional.diabetes.org/files/media/dc_40_s1_final.pdf.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "diabctrl"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "diabctrl": {
        "longname": "RF-Diabetes-Control",
        "definition": "Indicate the patient's diabetes control method at home. <br>Choose the most aggressive therapy from the order below<br>* Insulin: insulin treatment (includes any combination with insulin)<br>* Other subcutaneous medications (e.g., GLP-1 agonist)<br>* Oral: treatment with oral agent (includes oral agent with or without diet treatment)<br>* Diet only: Treatment with diet only<br>* None: no treatment for diabetes<br>* Other: other adjunctive treatment, non-oral/insulin/diet<br>* Unknown<br><br>2017 American Diabetes Association Standards of Medicare Care in Diabetes - 2017. Diabetes Care. 40 (Suppl.1) :S13. https://professional.diabetes.org/sites/professional.diabetes.org/files/media/dc_40_s1_final.pdf.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "None"
            },
            {
                "code": "2",
                "text": "Diet only"
            },
            {
                "code": "3",
                "text": "Oral"
            },
            {
                "code": "4",
                "text": "Insulin"
            },
            {
                "code": "6",
                "text": "Other SubQ"
            },
            {
                "code": "5",
                "text": "Other"
            },
            {
                "code": "7",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": "diabetes",
            "code": "1"
        },
        "selected": null
    },
    "infendo": {
        "longname": "RF- Endocarditis",
        "definition": "Indicate whether the patient has a history of endocarditis.  Endocarditis must meet the current CDC definition (see Training Manual).",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "infendty",
            "infendcult"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "infendty": {
        "longname": "RF-Infect Endocard Type",
        "definition": "Indicate the type of endocarditis the patient has. If the patient is currently being treated for endocarditis, the disease is considered active. If no antibiotic medication (other than prophylactic medication) is being given at the time of surgery and the cultures are negative, then the infection is considered treated.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Treated"
            },
            {
                "code": "2",
                "text": "Active"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": "infendo",
            "code": "1"
        },
        "selected": null
    },
    "cva": {
        "longname": "Prior CVA",
        "definition": "Indicate whether the patient has a history of stroke. Stroke is an acute episode of focal or global neurological dysfunction caused by brain, spinal cord, or retinal vascular injury as a result of hemorrhage or infarction, where the neurological dysfunction lasts for greater than 24 hours.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "cvawhen"
        ],
        "parent": {
            "shortname": "cvd",
            "code": "1"
        },
        "selected": null
    },
    "cvawhen": {
        "longname": "Prior CVA-When",
        "definition": "Indicate when the CVA events occurred. Those events occurring within 30 days prior to the surgical procedure are considered recent, while all others are considered remote.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "3",
                "text": "<= 30 days"
            },
            {
                "code": "4",
                "text": "> 30 days"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": "cva",
            "code": "1"
        },
        "selected": null
    },
    "chrlungd": {
        "longname": "RF-Chronic Lung Disease",
        "definition": "Indicate whether the patient has chronic lung disease, and the severity level according to the following classification:<br><br>No;<br><br>Mild: FEV1 60% to 75% of predicted, or on chronic inhaled or oral bronchodilator therapy.<br><br>Moderate: FEV1 50% to 59% of predicted, or on chronic oral/systemic steroid therapy aimed at lung disease.<br><br>Severe: FEV1 < 50% or Room Air pO2 < 60 or pCO2 > 50.  <br><br>CLD present, severity not documented.<br><br>Unknown",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "No"
            },
            {
                "code": "2",
                "text": "Mild"
            },
            {
                "code": "3",
                "text": "Moderate"
            },
            {
                "code": "4",
                "text": "Severe"
            },
            {
                "code": "5",
                "text": "Lung disease documented, severity unknown"
            },
            {
                "code": "6",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "chrlungdtype"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "cvdstenrt": {
        "longname": "CVD Carotid Stenosis - Right",
        "definition": "Indicate the severity of stenosis reported on the right carotid artery.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "3",
                "text": "50% to 79%"
            },
            {
                "code": "1",
                "text": "80% to 99%"
            },
            {
                "code": "2",
                "text": "100%"
            },
            {
                "code": "4",
                "text": "Not documented"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "cvdstenlft": {
        "longname": "CVD Carotid Stenosis - Left",
        "definition": "Indicate the severity of stenosis reported on the left carotid artery.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "3",
                "text": "50% to 79%"
            },
            {
                "code": "1",
                "text": "80% to 99%"
            },
            {
                "code": "2",
                "text": "100%"
            },
            {
                "code": "4",
                "text": "Not documented"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "ivdrugab": {
        "longname": "RF-Illicit Drug Use within One Year",
        "definition": "Indicate whether there is documented history of use of illicit drugs, such as heroin, cocaine, or methamphetamine, or abuse of a controlled substance within the last year.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "ivdruguse1yr",
            "druguse30d"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "alcohol": {
        "longname": "RF-Alcohol Use",
        "definition": "Specify alcohol consumption history.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "<= 1 drink/week"
            },
            {
                "code": "2",
                "text": "2-7 drinks/week"
            },
            {
                "code": "3",
                "text": ">= 8 drinks/week"
            },
            {
                "code": "4",
                "text": "None"
            },
            {
                "code": "5",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "pneumonia": {
        "longname": "RF-Pneumonia",
        "definition": "Indicate whether patient has a recent (within 30 days) or remote (more than 30 days) history of pneumonia.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "2",
                "text": "Recent"
            },
            {
                "code": "3",
                "text": "Remote"
            },
            {
                "code": "1",
                "text": "No"
            },
            {
                "code": "4",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "tobaccouse": {
        "longname": "RF-Tobacco Use",
        "definition": "Indicate current (within 30 days prior to admission) or previous use of any tobacco product, including Cigarettes, Pipe, Cigars, Smokeless Cans, Other tobacco products (orbs, strips, sticks, hookah, etc.).",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Never smoker"
            },
            {
                "code": "2",
                "text": "Current every day smoker"
            },
            {
                "code": "3",
                "text": "Current some day smoker"
            },
            {
                "code": "4",
                "text": "Smoker, current status (frequency) unknown"
            },
            {
                "code": "5",
                "text": "Former smoker"
            },
            {
                "code": "6",
                "text": "Smoking status unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "hmo2": {
        "longname": "RF-Home Oxygen",
        "definition": "Indicate whether supplemental oxygen at home is prescribed and used.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "3",
                "text": "Yes, PRN"
            },
            {
                "code": "4",
                "text": "Yes, oxygen dependent"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "5",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "prcvint": {
        "longname": "Prev Cardiac Interventions",
        "definition": "Indicate whether the patient has undergone any previous cardiovascular intervention, either surgical or non-surgical, which may include those done during the current admission.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "prcab",
            "prvalve",
            "pocpci",
            "poc"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "prcab": {
        "longname": "Prev CAB",
        "definition": "Indicate whether the patient had a previous Coronary Bypass Graft prior to the current admission.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": "prcvint",
            "code": "1"
        },
        "selected": null
    },
    "prvalve": {
        "longname": "Prev Valve",
        "definition": "Indicate whether the patient had a previous surgical replacement and/or surgical repair of a cardiac valve. This may also include percutaneous or transcatheter valve procedures.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "prvalveproc1",
            "prvalveproc2"
        ],
        "parent": {
            "shortname": "prcvint",
            "code": "1"
        },
        "selected": null
    },
    "prvalveproc1": {
        "longname": "Prev Valve Procedure 1",
        "definition": "Indicate the first previous valve procedure.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "2",
                "text": "Aortic valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "3",
                "text": "Aortic valve repair, surgical"
            },
            {
                "code": "4",
                "text": "Aortic valve replacement, surgical"
            },
            {
                "code": "5",
                "text": "Aortic valve replacement, transcatheter"
            },
            {
                "code": "6",
                "text": "Mitral valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "7",
                "text": "Mitral valve commissurotomy, surgical"
            },
            {
                "code": "8",
                "text": "Mitral valve repair, percutaneous"
            },
            {
                "code": "9",
                "text": "Mitral valve repair, surgical"
            },
            {
                "code": "10",
                "text": "Mitral valve replacement, surgical"
            },
            {
                "code": "11",
                "text": "Mitral valve replacement, transcatheter"
            },
            {
                "code": "12",
                "text": "Tricuspid valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "13",
                "text": "Tricuspid valve repair, percutaneous"
            },
            {
                "code": "14",
                "text": "Tricuspid valve repair, surgical"
            },
            {
                "code": "15",
                "text": "Tricuspid valve replacement, surgical"
            },
            {
                "code": "16",
                "text": "Tricuspid valve replacement, transcatheter"
            },
            {
                "code": "17",
                "text": "Tricuspid valvectomy"
            },
            {
                "code": "18",
                "text": "Pulmonary valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "19",
                "text": "Pulmonary valve repair, surgical"
            },
            {
                "code": "20",
                "text": "Pulmonary valve replacement, surgical"
            },
            {
                "code": "21",
                "text": "Pulmonary valve replacement, transcatheter"
            },
            {
                "code": "22",
                "text": "Pulmonary valvectomy"
            },
            {
                "code": "23",
                "text": "Other valve procedure"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": "prvalve",
            "code": "1"
        },
        "selected": null
    },
    "prvalveproc2": {
        "longname": "Prev Valve Procedure 2",
        "definition": "Indicate the second previous valve procedure or select \"No additional valve procedures\"",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "No additional valve procedure(s)"
            },
            {
                "code": "2",
                "text": "Aortic valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "3",
                "text": "Aortic valve repair, surgical"
            },
            {
                "code": "4",
                "text": "Aortic valve replacement, surgical"
            },
            {
                "code": "5",
                "text": "Aortic valve replacement, transcatheter"
            },
            {
                "code": "6",
                "text": "Mitral valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "7",
                "text": "Mitral valve commissurotomy, surgical"
            },
            {
                "code": "8",
                "text": "Mitral valve repair, percutaneous"
            },
            {
                "code": "9",
                "text": "Mitral valve repair, surgical"
            },
            {
                "code": "10",
                "text": "Mitral valve replacement, surgical"
            },
            {
                "code": "11",
                "text": "Mitral valve replacement, transcatheter"
            },
            {
                "code": "12",
                "text": "Tricuspid valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "13",
                "text": "Tricuspid valve repair, percutaneous"
            },
            {
                "code": "14",
                "text": "Tricuspid valve repair, surgical"
            },
            {
                "code": "15",
                "text": "Tricuspid valve replacement, surgical"
            },
            {
                "code": "16",
                "text": "Tricuspid valve replacement, transcatheter"
            },
            {
                "code": "17",
                "text": "Tricuspid valvectomy"
            },
            {
                "code": "18",
                "text": "Pulmonary valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "19",
                "text": "Pulmonary valve repair, surgical"
            },
            {
                "code": "20",
                "text": "Pulmonary valve replacement, surgical"
            },
            {
                "code": "21",
                "text": "Pulmonary valve replacement, transcatheter"
            },
            {
                "code": "22",
                "text": "Pulmonary valvectomy"
            },
            {
                "code": "23",
                "text": "Other valve procedure"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "prvalveproc3"
        ],
        "parent": {
            "shortname": "prvalve",
            "code": "1"
        },
        "selected": null
    },
    "prvalveproc3": {
        "longname": "Prev Valve Procedure 3",
        "definition": "Indicate the third previous valve procedure or select \"No additional valve procedures\"",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "No additional valve procedure(s)"
            },
            {
                "code": "2",
                "text": "Aortic valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "3",
                "text": "Aortic valve repair, surgical"
            },
            {
                "code": "4",
                "text": "Aortic valve replacement, surgical"
            },
            {
                "code": "5",
                "text": "Aortic valve replacement, transcatheter"
            },
            {
                "code": "6",
                "text": "Mitral valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "7",
                "text": "Mitral valve commissurotomy, surgical"
            },
            {
                "code": "8",
                "text": "Mitral valve repair, percutaneous"
            },
            {
                "code": "9",
                "text": "Mitral valve repair, surgical"
            },
            {
                "code": "10",
                "text": "Mitral valve replacement, surgical"
            },
            {
                "code": "11",
                "text": "Mitral valve replacement, transcatheter"
            },
            {
                "code": "12",
                "text": "Tricuspid valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "13",
                "text": "Tricuspid valve repair, percutaneous"
            },
            {
                "code": "14",
                "text": "Tricuspid valve repair, surgical"
            },
            {
                "code": "15",
                "text": "Tricuspid valve replacement, surgical"
            },
            {
                "code": "16",
                "text": "Tricuspid valve replacement, transcatheter"
            },
            {
                "code": "17",
                "text": "Tricuspid valvectomy"
            },
            {
                "code": "18",
                "text": "Pulmonary valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "19",
                "text": "Pulmonary valve repair, surgical"
            },
            {
                "code": "20",
                "text": "Pulmonary valve replacement, surgical"
            },
            {
                "code": "21",
                "text": "Pulmonary valve replacement, transcatheter"
            },
            {
                "code": "22",
                "text": "Pulmonary valvectomy"
            },
            {
                "code": "23",
                "text": "Other valve procedure"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "prvalveproc4"
        ],
        "parent": {
            "shortname": "prvalveproc2",
            "code": "<>1 And Is Not Missing"
        },
        "selected": null
    },
    "prvalveproc4": {
        "longname": "Prev Valve Procedure 4",
        "definition": "Indicate the fourth previous valve procedure or select \"No additional valve procedures\"",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "No additional valve procedure(s)"
            },
            {
                "code": "2",
                "text": "Aortic valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "3",
                "text": "Aortic valve repair, surgical"
            },
            {
                "code": "4",
                "text": "Aortic valve replacement, surgical"
            },
            {
                "code": "5",
                "text": "Aortic valve replacement, transcatheter"
            },
            {
                "code": "6",
                "text": "Mitral valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "7",
                "text": "Mitral valve commissurotomy, surgical"
            },
            {
                "code": "8",
                "text": "Mitral valve repair, percutaneous"
            },
            {
                "code": "9",
                "text": "Mitral valve repair, surgical"
            },
            {
                "code": "10",
                "text": "Mitral valve replacement, surgical"
            },
            {
                "code": "11",
                "text": "Mitral valve replacement, transcatheter"
            },
            {
                "code": "12",
                "text": "Tricuspid valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "13",
                "text": "Tricuspid valve repair, percutaneous"
            },
            {
                "code": "14",
                "text": "Tricuspid valve repair, surgical"
            },
            {
                "code": "15",
                "text": "Tricuspid valve replacement, surgical"
            },
            {
                "code": "16",
                "text": "Tricuspid valve replacement, transcatheter"
            },
            {
                "code": "17",
                "text": "Tricuspid valvectomy"
            },
            {
                "code": "18",
                "text": "Pulmonary valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "19",
                "text": "Pulmonary valve repair, surgical"
            },
            {
                "code": "20",
                "text": "Pulmonary valve replacement, surgical"
            },
            {
                "code": "21",
                "text": "Pulmonary valve replacement, transcatheter"
            },
            {
                "code": "22",
                "text": "Pulmonary valvectomy"
            },
            {
                "code": "23",
                "text": "Other valve procedure"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "prvalveproc5"
        ],
        "parent": {
            "shortname": "prvalveproc3",
            "code": "<>1 And Is Not Missing"
        },
        "selected": null
    },
    "prvalveproc5": {
        "longname": "Prev Valve Procedure 5",
        "definition": "Indicate the fifth previous valve procedure or select \"No additional valve procedures\"",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "No additional valve procedure(s)"
            },
            {
                "code": "2",
                "text": "Aortic valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "3",
                "text": "Aortic valve repair, surgical"
            },
            {
                "code": "4",
                "text": "Aortic valve replacement, surgical"
            },
            {
                "code": "5",
                "text": "Aortic valve replacement, transcatheter"
            },
            {
                "code": "6",
                "text": "Mitral valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "7",
                "text": "Mitral valve commissurotomy, surgical"
            },
            {
                "code": "8",
                "text": "Mitral valve repair, percutaneous"
            },
            {
                "code": "9",
                "text": "Mitral valve repair, surgical"
            },
            {
                "code": "10",
                "text": "Mitral valve replacement, surgical"
            },
            {
                "code": "11",
                "text": "Mitral valve replacement, transcatheter"
            },
            {
                "code": "12",
                "text": "Tricuspid valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "13",
                "text": "Tricuspid valve repair, percutaneous"
            },
            {
                "code": "14",
                "text": "Tricuspid valve repair, surgical"
            },
            {
                "code": "15",
                "text": "Tricuspid valve replacement, surgical"
            },
            {
                "code": "16",
                "text": "Tricuspid valve replacement, transcatheter"
            },
            {
                "code": "17",
                "text": "Tricuspid valvectomy"
            },
            {
                "code": "18",
                "text": "Pulmonary valve balloon valvotomy/valvuloplasty"
            },
            {
                "code": "19",
                "text": "Pulmonary valve repair, surgical"
            },
            {
                "code": "20",
                "text": "Pulmonary valve replacement, surgical"
            },
            {
                "code": "21",
                "text": "Pulmonary valve replacement, transcatheter"
            },
            {
                "code": "22",
                "text": "Pulmonary valvectomy"
            },
            {
                "code": "23",
                "text": "Other valve procedure"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": "prvalveproc4",
            "code": "<>1 And Is Not Missing"
        },
        "selected": null
    },
    "poc": {
        "longname": "Previous Other Cardiac",
        "definition": "Indicate whether the patient had any other previous cardiac intervention.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "pocint1",
            "pocint2"
        ],
        "parent": {
            "shortname": "prcvint",
            "code": "1"
        },
        "selected": null
    },
    "pocint1": {
        "longname": "Previous Other Cardiac Intervention 1",
        "definition": "Indicate the first other cardiac intervention that was performed.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "2",
                "text": "Ablation, catheter, atrial arrhythmia"
            },
            {
                "code": "3",
                "text": "Ablation, catheter, other or unknown"
            },
            {
                "code": "4",
                "text": "Ablation, catheter, ventricular arrhythmia"
            },
            {
                "code": "5",
                "text": "Ablation, surgical, atrial arrhythmia"
            },
            {
                "code": "6",
                "text": "Ablation, surgical, other or unknown"
            },
            {
                "code": "7",
                "text": "Aneurysmectomy, LV"
            },
            {
                "code": "8",
                "text": "Aortic procedure, arch"
            },
            {
                "code": "9",
                "text": "Aortic procedure, ascending"
            },
            {
                "code": "10",
                "text": "Aortic procedure, descending"
            },
            {
                "code": "11",
                "text": "Aortic procedure, root"
            },
            {
                "code": "12",
                "text": "Aortic procedure, thoracoabdominal"
            },
            {
                "code": "13",
                "text": "Aortic Procedure, TEVAR"
            },
            {
                "code": "14",
                "text": "Aortic root procedure, valve sparing"
            },
            {
                "code": "15",
                "text": "Atrial appendage obliteration, left, surgical"
            },
            {
                "code": "16",
                "text": "Atrial appendage obliteration, left, transcatheter"
            },
            {
                "code": "19",
                "text": "Cardiac Tumor"
            },
            {
                "code": "20",
                "text": "Cardioversion(s)"
            },
            {
                "code": "21",
                "text": "Closure device, atrial septal defect"
            },
            {
                "code": "22",
                "text": "Closure device, ventricular septal defect"
            },
            {
                "code": "23",
                "text": "Congenital cardiac repair, surgical"
            },
            {
                "code": "37",
                "text": "ECMO"
            },
            {
                "code": "24",
                "text": "Implantable Cardioverter Defibrillator (ICD) with or without pacer"
            },
            {
                "code": "39",
                "text": "Myectomy (not congenital)"
            },
            {
                "code": "25",
                "text": "Permanent Pacemaker"
            },
            {
                "code": "38",
                "text": "Pericardial window / Pericardiocentesis"
            },
            {
                "code": "26",
                "text": "Pericardiectomy"
            },
            {
                "code": "27",
                "text": "Pulmonary Thromboembolectomy"
            },
            {
                "code": "28",
                "text": "Total Artificial Heart (TAH)"
            },
            {
                "code": "29",
                "text": "Transmyocardial Laser Revascularization (TMR)"
            },
            {
                "code": "30",
                "text": "Transplant heart & lung"
            },
            {
                "code": "31",
                "text": "Transplant, heart"
            },
            {
                "code": "32",
                "text": "Transplant, lung(s)"
            },
            {
                "code": "33",
                "text": "Ventricular Assist Device (VAD), BiVAD"
            },
            {
                "code": "34",
                "text": "Ventricular Assist Device (VAD), left"
            },
            {
                "code": "35",
                "text": "Ventricular Assist Device (VAD), right"
            },
            {
                "code": "36",
                "text": "Other Cardiac Intervention (not listed)"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": "poc",
            "code": "1"
        },
        "selected": null
    },
    "pocint2": {
        "longname": "Previous Other Cardiac Intervention 2",
        "definition": "Indicate the second other cardiac intervention that was performed.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "No additional interventions"
            },
            {
                "code": "2",
                "text": "Ablation, catheter, atrial arrhythmia"
            },
            {
                "code": "3",
                "text": "Ablation, catheter, other or unknown"
            },
            {
                "code": "4",
                "text": "Ablation, catheter, ventricular arrhythmia"
            },
            {
                "code": "5",
                "text": "Ablation, surgical, atrial arrhythmia"
            },
            {
                "code": "6",
                "text": "Ablation, surgical, other or unknown"
            },
            {
                "code": "7",
                "text": "Aneurysmectomy, LV"
            },
            {
                "code": "8",
                "text": "Aortic procedure, arch"
            },
            {
                "code": "9",
                "text": "Aortic procedure, ascending"
            },
            {
                "code": "10",
                "text": "Aortic procedure, descending"
            },
            {
                "code": "11",
                "text": "Aortic procedure, root"
            },
            {
                "code": "12",
                "text": "Aortic procedure, thoracoabdominal"
            },
            {
                "code": "13",
                "text": "Aortic Procedure, TEVAR"
            },
            {
                "code": "14",
                "text": "Aortic root procedure, valve sparing"
            },
            {
                "code": "15",
                "text": "Atrial appendage obliteration, left, surgical"
            },
            {
                "code": "16",
                "text": "Atrial appendage obliteration, left, transcatheter"
            },
            {
                "code": "19",
                "text": "Cardiac Tumor"
            },
            {
                "code": "20",
                "text": "Cardioversion(s)"
            },
            {
                "code": "21",
                "text": "Closure device, atrial septal defect"
            },
            {
                "code": "22",
                "text": "Closure device, ventricular septal defect"
            },
            {
                "code": "23",
                "text": "Congenital cardiac repair, surgical"
            },
            {
                "code": "37",
                "text": "ECMO"
            },
            {
                "code": "24",
                "text": "Implantable Cardioverter Defibrillator (ICD) with or without pacer"
            },
            {
                "code": "39",
                "text": "Myectomy (not congenital)"
            },
            {
                "code": "25",
                "text": "Permanent Pacemaker"
            },
            {
                "code": "38",
                "text": "Pericardial window / Pericardiocentesis"
            },
            {
                "code": "26",
                "text": "Pericardiectomy"
            },
            {
                "code": "27",
                "text": "Pulmonary Thromboembolectomy"
            },
            {
                "code": "28",
                "text": "Total Artificial Heart (TAH)"
            },
            {
                "code": "29",
                "text": "Transmyocardial Laser Revascularization (TMR)"
            },
            {
                "code": "30",
                "text": "Transplant heart & lung"
            },
            {
                "code": "31",
                "text": "Transplant, heart"
            },
            {
                "code": "32",
                "text": "Transplant, lung(s)"
            },
            {
                "code": "33",
                "text": "Ventricular Assist Device (VAD), BiVAD"
            },
            {
                "code": "34",
                "text": "Ventricular Assist Device (VAD), left"
            },
            {
                "code": "35",
                "text": "Ventricular Assist Device (VAD), right"
            },
            {
                "code": "36",
                "text": "Other Cardiac Intervention (not listed)"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "pocint3"
        ],
        "parent": {
            "shortname": "poc",
            "code": "1"
        },
        "selected": null
    },
    "pocint3": {
        "longname": "Previous Other Cardiac Intervention 3",
        "definition": "Indicate the third other cardiac intervention that was performed.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "No additional interventions"
            },
            {
                "code": "2",
                "text": "Ablation, catheter, atrial arrhythmia"
            },
            {
                "code": "3",
                "text": "Ablation, catheter, other or unknown"
            },
            {
                "code": "4",
                "text": "Ablation, catheter, ventricular arrhythmia"
            },
            {
                "code": "5",
                "text": "Ablation, surgical, atrial arrhythmia"
            },
            {
                "code": "6",
                "text": "Ablation, surgical, other or unknown"
            },
            {
                "code": "7",
                "text": "Aneurysmectomy, LV"
            },
            {
                "code": "8",
                "text": "Aortic procedure, arch"
            },
            {
                "code": "9",
                "text": "Aortic procedure, ascending"
            },
            {
                "code": "10",
                "text": "Aortic procedure, descending"
            },
            {
                "code": "11",
                "text": "Aortic procedure, root"
            },
            {
                "code": "12",
                "text": "Aortic procedure, thoracoabdominal"
            },
            {
                "code": "13",
                "text": "Aortic Procedure, TEVAR"
            },
            {
                "code": "14",
                "text": "Aortic root procedure, valve sparing"
            },
            {
                "code": "15",
                "text": "Atrial appendage obliteration, left, surgical"
            },
            {
                "code": "16",
                "text": "Atrial appendage obliteration, left, transcatheter"
            },
            {
                "code": "19",
                "text": "Cardiac Tumor"
            },
            {
                "code": "20",
                "text": "Cardioversion(s)"
            },
            {
                "code": "21",
                "text": "Closure device, atrial septal defect"
            },
            {
                "code": "22",
                "text": "Closure device, ventricular septal defect"
            },
            {
                "code": "23",
                "text": "Congenital cardiac repair, surgical"
            },
            {
                "code": "37",
                "text": "ECMO"
            },
            {
                "code": "24",
                "text": "Implantable Cardioverter Defibrillator (ICD) with or without pacer"
            },
            {
                "code": "39",
                "text": "Myectomy (not congenital)"
            },
            {
                "code": "25",
                "text": "Permanent Pacemaker"
            },
            {
                "code": "38",
                "text": "Pericardial window / Pericardiocentesis"
            },
            {
                "code": "26",
                "text": "Pericardiectomy"
            },
            {
                "code": "27",
                "text": "Pulmonary Thromboembolectomy"
            },
            {
                "code": "28",
                "text": "Total Artificial Heart (TAH)"
            },
            {
                "code": "29",
                "text": "Transmyocardial Laser Revascularization (TMR)"
            },
            {
                "code": "30",
                "text": "Transplant heart & lung"
            },
            {
                "code": "31",
                "text": "Transplant, heart"
            },
            {
                "code": "32",
                "text": "Transplant, lung(s)"
            },
            {
                "code": "33",
                "text": "Ventricular Assist Device (VAD), BiVAD"
            },
            {
                "code": "34",
                "text": "Ventricular Assist Device (VAD), left"
            },
            {
                "code": "35",
                "text": "Ventricular Assist Device (VAD), right"
            },
            {
                "code": "36",
                "text": "Other Cardiac Intervention (not listed)"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "pocint4"
        ],
        "parent": {
            "shortname": "pocint2",
            "code": "<>1 And Is Not Missing"
        },
        "selected": null
    },
    "pocint4": {
        "longname": "Previous Other Cardiac Intervention 4",
        "definition": "Indicate the fourth other cardiac intervention that was performed.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "No additional interventions"
            },
            {
                "code": "2",
                "text": "Ablation, catheter, atrial arrhythmia"
            },
            {
                "code": "3",
                "text": "Ablation, catheter, other or unknown"
            },
            {
                "code": "4",
                "text": "Ablation, catheter, ventricular arrhythmia"
            },
            {
                "code": "5",
                "text": "Ablation, surgical, atrial arrhythmia"
            },
            {
                "code": "6",
                "text": "Ablation, surgical, other or unknown"
            },
            {
                "code": "7",
                "text": "Aneurysmectomy, LV"
            },
            {
                "code": "8",
                "text": "Aortic procedure, arch"
            },
            {
                "code": "9",
                "text": "Aortic procedure, ascending"
            },
            {
                "code": "10",
                "text": "Aortic procedure, descending"
            },
            {
                "code": "11",
                "text": "Aortic procedure, root"
            },
            {
                "code": "12",
                "text": "Aortic procedure, thoracoabdominal"
            },
            {
                "code": "13",
                "text": "Aortic Procedure, TEVAR"
            },
            {
                "code": "14",
                "text": "Aortic root procedure, valve sparing"
            },
            {
                "code": "15",
                "text": "Atrial appendage obliteration, left, surgical"
            },
            {
                "code": "16",
                "text": "Atrial appendage obliteration, left, transcatheter"
            },
            {
                "code": "19",
                "text": "Cardiac Tumor"
            },
            {
                "code": "20",
                "text": "Cardioversion(s)"
            },
            {
                "code": "21",
                "text": "Closure device, atrial septal defect"
            },
            {
                "code": "22",
                "text": "Closure device, ventricular septal defect"
            },
            {
                "code": "23",
                "text": "Congenital cardiac repair, surgical"
            },
            {
                "code": "37",
                "text": "ECMO"
            },
            {
                "code": "24",
                "text": "Implantable Cardioverter Defibrillator (ICD) with or without pacer"
            },
            {
                "code": "39",
                "text": "Myectomy (not congenital)"
            },
            {
                "code": "25",
                "text": "Permanent Pacemaker"
            },
            {
                "code": "38",
                "text": "Pericardial window / Pericardiocentesis"
            },
            {
                "code": "26",
                "text": "Pericardiectomy"
            },
            {
                "code": "27",
                "text": "Pulmonary Thromboembolectomy"
            },
            {
                "code": "28",
                "text": "Total Artificial Heart (TAH)"
            },
            {
                "code": "29",
                "text": "Transmyocardial Laser Revascularization (TMR)"
            },
            {
                "code": "30",
                "text": "Transplant heart & lung"
            },
            {
                "code": "31",
                "text": "Transplant, heart"
            },
            {
                "code": "32",
                "text": "Transplant, lung(s)"
            },
            {
                "code": "33",
                "text": "Ventricular Assist Device (VAD), BiVAD"
            },
            {
                "code": "34",
                "text": "Ventricular Assist Device (VAD), left"
            },
            {
                "code": "35",
                "text": "Ventricular Assist Device (VAD), right"
            },
            {
                "code": "36",
                "text": "Other Cardiac Intervention (not listed)"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "pocint5"
        ],
        "parent": {
            "shortname": "pocint3",
            "code": "<>1 And Is Not Missing"
        },
        "selected": null
    },
    "pocint5": {
        "longname": "Previous Other Cardiac Intervention 5",
        "definition": "Indicate the fifth other cardiac intervention that was performed.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "No additional interventions"
            },
            {
                "code": "2",
                "text": "Ablation, catheter, atrial arrhythmia"
            },
            {
                "code": "3",
                "text": "Ablation, catheter, other or unknown"
            },
            {
                "code": "4",
                "text": "Ablation, catheter, ventricular arrhythmia"
            },
            {
                "code": "5",
                "text": "Ablation, surgical, atrial arrhythmia"
            },
            {
                "code": "6",
                "text": "Ablation, surgical, other or unknown"
            },
            {
                "code": "7",
                "text": "Aneurysmectomy, LV"
            },
            {
                "code": "8",
                "text": "Aortic procedure, arch"
            },
            {
                "code": "9",
                "text": "Aortic procedure, ascending"
            },
            {
                "code": "10",
                "text": "Aortic procedure, descending"
            },
            {
                "code": "11",
                "text": "Aortic procedure, root"
            },
            {
                "code": "12",
                "text": "Aortic procedure, thoracoabdominal"
            },
            {
                "code": "13",
                "text": "Aortic Procedure, TEVAR"
            },
            {
                "code": "14",
                "text": "Aortic root procedure, valve sparing"
            },
            {
                "code": "15",
                "text": "Atrial appendage obliteration, left, surgical"
            },
            {
                "code": "16",
                "text": "Atrial appendage obliteration, left, transcatheter"
            },
            {
                "code": "19",
                "text": "Cardiac Tumor"
            },
            {
                "code": "20",
                "text": "Cardioversion(s)"
            },
            {
                "code": "21",
                "text": "Closure device, atrial septal defect"
            },
            {
                "code": "22",
                "text": "Closure device, ventricular septal defect"
            },
            {
                "code": "23",
                "text": "Congenital cardiac repair, surgical"
            },
            {
                "code": "37",
                "text": "ECMO"
            },
            {
                "code": "24",
                "text": "Implantable Cardioverter Defibrillator (ICD) with or without pacer"
            },
            {
                "code": "39",
                "text": "Myectomy (not congenital)"
            },
            {
                "code": "25",
                "text": "Permanent Pacemaker"
            },
            {
                "code": "38",
                "text": "Pericardial window / Pericardiocentesis"
            },
            {
                "code": "26",
                "text": "Pericardiectomy"
            },
            {
                "code": "27",
                "text": "Pulmonary Thromboembolectomy"
            },
            {
                "code": "28",
                "text": "Total Artificial Heart (TAH)"
            },
            {
                "code": "29",
                "text": "Transmyocardial Laser Revascularization (TMR)"
            },
            {
                "code": "30",
                "text": "Transplant heart & lung"
            },
            {
                "code": "31",
                "text": "Transplant, heart"
            },
            {
                "code": "32",
                "text": "Transplant, lung(s)"
            },
            {
                "code": "33",
                "text": "Ventricular Assist Device (VAD), BiVAD"
            },
            {
                "code": "34",
                "text": "Ventricular Assist Device (VAD), left"
            },
            {
                "code": "35",
                "text": "Ventricular Assist Device (VAD), right"
            },
            {
                "code": "36",
                "text": "Other Cardiac Intervention (not listed)"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "pocint6"
        ],
        "parent": {
            "shortname": "pocint4",
            "code": "<>1 And Is Not Missing"
        },
        "selected": null
    },
    "pocint6": {
        "longname": "Previous Other Cardiac Intervention 6",
        "definition": "Indicate the sixth other cardiac intervention that was performed.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "No additional interventions"
            },
            {
                "code": "2",
                "text": "Ablation, catheter, atrial arrhythmia"
            },
            {
                "code": "3",
                "text": "Ablation, catheter, other or unknown"
            },
            {
                "code": "4",
                "text": "Ablation, catheter, ventricular arrhythmia"
            },
            {
                "code": "5",
                "text": "Ablation, surgical, atrial arrhythmia"
            },
            {
                "code": "6",
                "text": "Ablation, surgical, other or unknown"
            },
            {
                "code": "7",
                "text": "Aneurysmectomy, LV"
            },
            {
                "code": "8",
                "text": "Aortic procedure, arch"
            },
            {
                "code": "9",
                "text": "Aortic procedure, ascending"
            },
            {
                "code": "10",
                "text": "Aortic procedure, descending"
            },
            {
                "code": "11",
                "text": "Aortic procedure, root"
            },
            {
                "code": "12",
                "text": "Aortic procedure, thoracoabdominal"
            },
            {
                "code": "13",
                "text": "Aortic Procedure, TEVAR"
            },
            {
                "code": "14",
                "text": "Aortic root procedure, valve sparing"
            },
            {
                "code": "15",
                "text": "Atrial appendage obliteration, left, surgical"
            },
            {
                "code": "16",
                "text": "Atrial appendage obliteration, left, transcatheter"
            },
            {
                "code": "19",
                "text": "Cardiac Tumor"
            },
            {
                "code": "20",
                "text": "Cardioversion(s)"
            },
            {
                "code": "21",
                "text": "Closure device, atrial septal defect"
            },
            {
                "code": "22",
                "text": "Closure device, ventricular septal defect"
            },
            {
                "code": "23",
                "text": "Congenital cardiac repair, surgical"
            },
            {
                "code": "37",
                "text": "ECMO"
            },
            {
                "code": "24",
                "text": "Implantable Cardioverter Defibrillator (ICD) with or without pacer"
            },
            {
                "code": "39",
                "text": "Myectomy (not congenital)"
            },
            {
                "code": "25",
                "text": "Permanent Pacemaker"
            },
            {
                "code": "38",
                "text": "Pericardial window / Pericardiocentesis"
            },
            {
                "code": "26",
                "text": "Pericardiectomy"
            },
            {
                "code": "27",
                "text": "Pulmonary Thromboembolectomy"
            },
            {
                "code": "28",
                "text": "Total Artificial Heart (TAH)"
            },
            {
                "code": "29",
                "text": "Transmyocardial Laser Revascularization (TMR)"
            },
            {
                "code": "30",
                "text": "Transplant heart & lung"
            },
            {
                "code": "31",
                "text": "Transplant, heart"
            },
            {
                "code": "32",
                "text": "Transplant, lung(s)"
            },
            {
                "code": "33",
                "text": "Ventricular Assist Device (VAD), BiVAD"
            },
            {
                "code": "34",
                "text": "Ventricular Assist Device (VAD), left"
            },
            {
                "code": "35",
                "text": "Ventricular Assist Device (VAD), right"
            },
            {
                "code": "36",
                "text": "Other Cardiac Intervention (not listed)"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "pocint7"
        ],
        "parent": {
            "shortname": "pocint5",
            "code": "<>1 And Is Not Missing"
        },
        "selected": null
    },
    "pocint7": {
        "longname": "Previous Other Cardiac Intervention 7",
        "definition": "Indicate the seventh other cardiac intervention that was performed.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "No additional interventions"
            },
            {
                "code": "2",
                "text": "Ablation, catheter, atrial arrhythmia"
            },
            {
                "code": "3",
                "text": "Ablation, catheter, other or unknown"
            },
            {
                "code": "4",
                "text": "Ablation, catheter, ventricular arrhythmia"
            },
            {
                "code": "5",
                "text": "Ablation, surgical, atrial arrhythmia"
            },
            {
                "code": "6",
                "text": "Ablation, surgical, other or unknown"
            },
            {
                "code": "7",
                "text": "Aneurysmectomy, LV"
            },
            {
                "code": "8",
                "text": "Aortic procedure, arch"
            },
            {
                "code": "9",
                "text": "Aortic procedure, ascending"
            },
            {
                "code": "10",
                "text": "Aortic procedure, descending"
            },
            {
                "code": "11",
                "text": "Aortic procedure, root"
            },
            {
                "code": "12",
                "text": "Aortic procedure, thoracoabdominal"
            },
            {
                "code": "13",
                "text": "Aortic Procedure, TEVAR"
            },
            {
                "code": "14",
                "text": "Aortic root procedure, valve sparing"
            },
            {
                "code": "15",
                "text": "Atrial appendage obliteration, Left, surgical"
            },
            {
                "code": "16",
                "text": "Atrial appendage obliteration, Left, transcatheter"
            },
            {
                "code": "19",
                "text": "Cardiac Tumor"
            },
            {
                "code": "20",
                "text": "Cardioversion(s)"
            },
            {
                "code": "21",
                "text": "Closure device, atrial septal defect"
            },
            {
                "code": "22",
                "text": "Closure device, ventricular septal defect"
            },
            {
                "code": "23",
                "text": "Congenital cardiac repair, surgical"
            },
            {
                "code": "37",
                "text": "ECMO"
            },
            {
                "code": "24",
                "text": "Implantable Cardioverter Defibrillator (ICD) with or without pacer"
            },
            {
                "code": "39",
                "text": "Myectomy (not congenital)"
            },
            {
                "code": "25",
                "text": "Permanent Pacemaker"
            },
            {
                "code": "38",
                "text": "Pericardial window / Pericardiocentesis"
            },
            {
                "code": "26",
                "text": "Pericardiectomy"
            },
            {
                "code": "27",
                "text": "Pulmonary Thromboembolectomy"
            },
            {
                "code": "28",
                "text": "Total Artificial Heart (TAH)"
            },
            {
                "code": "29",
                "text": "Transmyocardial Laser Revascularization (TMR)"
            },
            {
                "code": "30",
                "text": "Transplant heart & lung"
            },
            {
                "code": "31",
                "text": "Transplant, heart"
            },
            {
                "code": "32",
                "text": "Transplant, lung(s)"
            },
            {
                "code": "33",
                "text": "Ventricular Assist Device (VAD), BiVAD"
            },
            {
                "code": "34",
                "text": "Ventricular Assist Device (VAD), left"
            },
            {
                "code": "35",
                "text": "Ventricular Assist Device (VAD), right"
            },
            {
                "code": "36",
                "text": "Other Cardiac Intervention (not listed)"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": "pocint6",
            "code": "<>1 And Is Not Missing"
        },
        "selected": null
    },
    "pocpci": {
        "longname": "Previous PCI",
        "definition": "Indicate whether a previous Percutaneous Coronary Intervention (PCI) was performed any time prior to this surgical procedure. <br>Percutaneous coronary intervention (PCI) is the placement of an angioplasty guide wire, balloon, or other<br>device (e.g. stent, atherectomy, brachytherapy, or thrombectomy catheter) into a native coronary artery or<br>coronary artery bypass graft for the purpose of mechanical coronary revascularization.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "pocpciwhen",
            "pocpcist",
            "pocpciin"
        ],
        "parent": {
            "shortname": "prcvint",
            "code": "1"
        },
        "selected": null
    },
    "pocpciwhen": {
        "longname": "Previous PCI-Within This Episode of Care",
        "definition": "Indicate whether the previous Percutaneous Cardiac Intervention (PCI) was performed within this episode of care. Episode of care is defined as continuous inpatient hospitalization which includes transfer from one acute care hospital to another.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes, at this facility"
            },
            {
                "code": "2",
                "text": "Yes, at some other acute care facility"
            },
            {
                "code": "3",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "pocpcindsurg"
        ],
        "parent": {
            "shortname": "pocpci",
            "code": "1"
        },
        "selected": null
    },
    "pocpciin": {
        "longname": "Previous PCI-Interval",
        "definition": "Indicate the interval of time between the most recent PCI and the current surgical procedure",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "<= 6 Hours"
            },
            {
                "code": "2",
                "text": "> 6 Hours"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": "pocpci",
            "code": "1"
        },
        "selected": null
    },
    "miwhen": {
        "longname": "MI-When",
        "definition": "Indicate the time period between the last documented myocardial infarction and surgery.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "<=6 Hrs"
            },
            {
                "code": "2",
                "text": ">6 Hrs but <24 Hrs"
            },
            {
                "code": "3",
                "text": "1 to 7 Days"
            },
            {
                "code": "4",
                "text": "8 to 21 Days"
            },
            {
                "code": "5",
                "text": ">21 Days"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "heartfailtmg": {
        "longname": "Heart Failure Timing",
        "definition": "Indicate whether heart failure is acute, chronic or both (acute on chronic)",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Acute"
            },
            {
                "code": "2",
                "text": "Chronic"
            },
            {
                "code": "3",
                "text": "Both"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "classnyh": {
        "longname": "Classification-NYHA",
        "definition": "Indicate the patient's worst dyspnea or functional class, coded as the New York Heart Association (NYHA) classification documented by a MD/Provider within the past 2 weeks.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Class I"
            },
            {
                "code": "2",
                "text": "Class II"
            },
            {
                "code": "3",
                "text": "Class III"
            },
            {
                "code": "4",
                "text": "Class IV"
            },
            {
                "code": "5",
                "text": "Not documented"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "cardsymptimeofadm": {
        "longname": "Primary Coronary Symptom for Surgery",
        "definition": "Indicate the patient's worse sympotom prior to surgery from Admission to OR Entry",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "No Coronary Symptoms"
            },
            {
                "code": "2",
                "text": "Stable Angina"
            },
            {
                "code": "5",
                "text": "ST Elevation MI (STEMI)"
            },
            {
                "code": "6",
                "text": "Angina equivalent"
            },
            {
                "code": "3",
                "text": "Unstable Angina"
            },
            {
                "code": "4",
                "text": "Non-ST Elevation MI (Non-STEMI)"
            },
            {
                "code": "7",
                "text": "Other"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "carshock": {
        "longname": "Cardiogenic Shock",
        "definition": "Indicate if the patient developed cardiogenic shock prior to induction.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "3",
                "text": "Yes - At the time of the procedure"
            },
            {
                "code": "4",
                "text": "Yes, not at the time of the procedure but within prior 24 hours"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "arrhythatrfib": {
        "longname": "Cardiac Arrhythmia - Atrial Fibrillation",
        "definition": "Indicate whether arrhythmia was atrial fibrillation.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "None"
            },
            {
                "code": "2",
                "text": "Remote (> 30 days preop)"
            },
            {
                "code": "3",
                "text": "Recent (<= 30 days preop)"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "arrhythafib",
            "afibrecorentry"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "arrhythafib": {
        "longname": "Atrial Fibrillation - Type",
        "definition": "Indicate whether arrhythmia was atrial fibrillation and if so, which type.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "2",
                "text": "Paroxysmal"
            },
            {
                "code": "4",
                "text": "Persistent"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": "arrhythatrfib",
            "code": "2|3"
        },
        "selected": null
    },
    "arrhythaflutter": {
        "longname": "Cardiac Arrhythmia - AFlutter",
        "definition": "Indicate whether arrhythmia was atrial flutter.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "None"
            },
            {
                "code": "2",
                "text": "Remote (> 30 days preop)"
            },
            {
                "code": "3",
                "text": "Recent (<= 30 days preop)"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "arrhyththird": {
        "longname": "Cardiac Arrhythmia - Third Degree Heart Block",
        "definition": "Indicate whether arrhythmia was third degree heart block.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "None"
            },
            {
                "code": "2",
                "text": "Remote (> 30 days preop)"
            },
            {
                "code": "3",
                "text": "Recent (<= 30 days preop)"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "arrhythsecond": {
        "longname": "Cardiac Arrhythmia - Second Degree Heart Block",
        "definition": "Indicate whether arrhythmia was second degree heart block.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "None"
            },
            {
                "code": "2",
                "text": "Remote (> 30 days preop)"
            },
            {
                "code": "3",
                "text": "Recent (<= 30 days preop)"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "arrhythsss": {
        "longname": "Cardiac Arrhythmia - Sick Sinus Syndrome",
        "definition": "Indicate whether arrhythmia was sick sinus syndrome.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "None"
            },
            {
                "code": "2",
                "text": "Remote (> 30 days preop)"
            },
            {
                "code": "3",
                "text": "Recent (<= 30 days preop)"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "arrhythvv": {
        "longname": "Cardiac Arrhythmia - VTach / VFib",
        "definition": "Indicate whether arrhythmia was VTach or VFib.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "None"
            },
            {
                "code": "2",
                "text": "Remote (> 30 days preop)"
            },
            {
                "code": "3",
                "text": "Recent (<= 30 days preop)"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "medinotr": {
        "longname": "Meds-Inotropes Within 48 Hours",
        "definition": "Indicate whether the patient received IV inotropic agents within 48 hours preceding surgery.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "medadp5days": {
        "longname": "Meds-ADP Inhibitors Within Five Days",
        "definition": "Indicate whether the patient has received ADP Inhibitors within 5 days preceding surgery.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Contraindicated"
            },
            {
                "code": "4",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "medadpidis"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "medadpidis": {
        "longname": "Meds-ADP Inhibitors Discontinuation",
        "definition": "Indicate the number of days prior to surgery ADP Inhibitor use was discontinued. If less than 24 hours, enter \"0\".",
        "low": "0",
        "high": "5",
        "harvest": null,
        "format": "Integer",
        "children": [],
        "parent": {
            "shortname": "medadp5days",
            "code": "1"
        },
        "selected": null
    },
    "medacei48": {
        "longname": "Meds-ACE Inhibitors or ARB Within 48 Hours",
        "definition": "Indicate whether the patient received ACE Inhibitors or ARB within 48 hours prior to OR Entry.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Contraindicated"
            },
            {
                "code": "4",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "medbeta": {
        "longname": "Meds-Beta Blockers Within 24 Hours",
        "definition": "Indicate whether or not the patient received beta blockers within 24 hours preceding incision time, or if beta blocker was contraindicated.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Contraindicated"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "medster": {
        "longname": "Meds-Steroids Within 24 Hours",
        "definition": "Indicate whether the patient was taking steroids within 24 hours of surgery. This does not include a one-time dose related to prophylaxis therapy (i.e. IV dye exposure for cath procedure or surgery pre-induction period). Non-systemic medications are not included in this category (i.e., nasal sprays, topical creams).",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "Contraindicated"
            },
            {
                "code": "4",
                "text": "Unknown"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "medgp": {
        "longname": "Meds-Glycoprotein IIb/IIIa Inhibitor Within 24 Hours",
        "definition": "Indicate whether the patient received Glycoprotein IIb/IIIa inhibitors within 24 hours preceding surgery.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "resusc": {
        "longname": "Resuscitation",
        "definition": "Indicate whether the patient required cardiopulmonary resuscitation before induction of anesthesia. Capture resuscitation timeframe: within 1 hour or 1-24 hours pre-op.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "3",
                "text": "Yes - Within 1 hour of the start of the procedure"
            },
            {
                "code": "4",
                "text": "Yes - More than 1 hour but less than 24 hours of the start of the procedure"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "numdisv": {
        "longname": "Number of Diseased Vessels",
        "definition": "Indicate the number of diseased major native coronary vessel systems. A vessel that has ever been considered diseased, should always be considered diseased. See TM for time frame and source document priority.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "None"
            },
            {
                "code": "2",
                "text": "One"
            },
            {
                "code": "3",
                "text": "Two"
            },
            {
                "code": "4",
                "text": "Three"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "stenleftmain",
            "laddiststen",
            "ramussten",
            "circdiststen",
            "rcadiststen",
            "pctstenknown",
            "graftsprsnt",
            "stentprsnt",
            "ffrperf",
            "ifrperf"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "stenleftmain": {
        "longname": "Left Main Stenosis >= 50% Known",
        "definition": "Indicate if main stenosis greater or equal to 50% is known.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            },
            {
                "code": "3",
                "text": "N/A"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "stenleftmainlctnkn"
        ],
        "parent": {
            "shortname": "numdisv",
            "code": "2|3|4"
        },
        "selected": null
    },
    "laddiststenpercent": {
        "longname": "LAD Distribution Stenosis Percentage",
        "definition": "Indicate the patient's LAD distribution stenosis percentage range.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "50 - 69%"
            },
            {
                "code": "2",
                "text": ">=70%"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "hdef": {
        "longname": "Hemo Data-EF",
        "definition": "Indicate the Ejection Fraction (percentage of the blood emptied from the left ventricle at the end of the contraction). See TM for time frame and source document priority. <br>Enter a percentage in the range of 1 - 99. If a percentage range is reported, report a whole number using the \"mean\" (i.e., 50-55% is reported as 53%).<br>* Hyperdynamic: >70%<br>* Normal: 50%-70% (midpoint 60%)<br>* Mild dysfunction: 40%-49% (midpoint 45%)<br>* Moderate dysfunction: 30%-39% (midpoint 35%)<br>* Severe dysfunction: <30%<br>Note: If no diagnostic report is in the medical record, a value documented in the medical record is acceptable.<br>ACCF/AHA 2013",
        "low": "1.0",
        "high": "99.0",
        "harvest": null,
        "format": "Real",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "vdstena": {
        "longname": "VD-Stenosis-Aortic",
        "definition": "Indicate whether Aortic Stenosis is present.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "avstenosis",
            "aohemodatavail"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "vdstenm": {
        "longname": "VD-Stenosis-Mitral",
        "definition": "Indicate whether Mitral Stenosis is present.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "mvstendeg",
            "mihemodatavail"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "vdinsufa": {
        "longname": "Aortic Valve Regurgitation Degree",
        "definition": "Indicate whether there is evidence of Aortic valve insufficiency/regurgitation.  See TM for time frame and source document priority.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Trivial/Trace"
            },
            {
                "code": "2",
                "text": "Mild"
            },
            {
                "code": "3",
                "text": "Moderate"
            },
            {
                "code": "4",
                "text": "Severe"
            },
            {
                "code": "5",
                "text": "Not documented"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "vdaveccjet"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "vdinsufm": {
        "longname": "VD-Regurgitation-Mitral",
        "definition": "Indicate whether there is evidence of Mitral valve insufficiency/regurgitation.  See TM for time frame and source document priority.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Trivial/Trace"
            },
            {
                "code": "2",
                "text": "Mild"
            },
            {
                "code": "3",
                "text": "Moderate"
            },
            {
                "code": "4",
                "text": "Severe"
            },
            {
                "code": "5",
                "text": "Not documented"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "vdmveccjet"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "vdinsuft": {
        "longname": "VD-Tricuspid Regurgitation",
        "definition": "Indicate whether there is evidence of Tricuspid valve insufficiency/regurgitation.  See TM for time frame and source document priority.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Trivial/Trace"
            },
            {
                "code": "2",
                "text": "Mild"
            },
            {
                "code": "3",
                "text": "Moderate"
            },
            {
                "code": "4",
                "text": "Severe"
            },
            {
                "code": "5",
                "text": "Not documented"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "vdaoprimet": {
        "longname": "VD-Aortic Valve Disease Primary Etiology",
        "definition": "Indicate the primary etiology of aortic valve disease.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Bicuspid valve disease"
            },
            {
                "code": "34",
                "text": "Unicuspid valve disease"
            },
            {
                "code": "35",
                "text": "Quadricuspid valve disease"
            },
            {
                "code": "2",
                "text": "Congenital (other than Bicuspid, Unicuspid, or Quadricuspid)"
            },
            {
                "code": "3",
                "text": "Degenerative- Calcified"
            },
            {
                "code": "4",
                "text": "Degenerative- Leaflet prolapse with or without annular dilatation"
            },
            {
                "code": "5",
                "text": "Degenerative- Pure annular dilatation without leaflet prolapse"
            },
            {
                "code": "6",
                "text": "Degenerative - Commissural Rupture"
            },
            {
                "code": "7",
                "text": "Degenerative - Extensive Fenestration"
            },
            {
                "code": "8",
                "text": "Degenerative - Leaflet perforation / hole"
            },
            {
                "code": "9",
                "text": "Endocarditis, native valve with root abscess"
            },
            {
                "code": "10",
                "text": "Endocarditis, native valve without root abscess"
            },
            {
                "code": "36",
                "text": "Endocarditis, prosthetic valve with root abscess"
            },
            {
                "code": "37",
                "text": "Endocarditis, prosthetic valve without root abscess"
            },
            {
                "code": "11",
                "text": "LV Outflow Tract Pathology, HOCM"
            },
            {
                "code": "12",
                "text": "LV Outflow Tract Pathology, Sub-aortic membrane"
            },
            {
                "code": "13",
                "text": "LV Outflow Tract Pathology, Sub-aortic tunnel"
            },
            {
                "code": "14",
                "text": "LV Outflow Tract Pathology, Other"
            },
            {
                "code": "15",
                "text": "Primary Aortic Disease, Aortic Dissection"
            },
            {
                "code": "16",
                "text": "Primary Aortic Disease, Atherosclerotic Aneurysm"
            },
            {
                "code": "17",
                "text": "Primary Aortic Disease, Ehler-Danlos Syndrome"
            },
            {
                "code": "18",
                "text": "Primary Aortic Disease, Hypertensive Aneurysm"
            },
            {
                "code": "19",
                "text": "Primary Aortic Disease, Idiopathic Root dilatation"
            },
            {
                "code": "20",
                "text": "Primary Aortic Disease, Inflammatory"
            },
            {
                "code": "21",
                "text": "Primary Aortic Disease, Loeys-Dietz Syndrome"
            },
            {
                "code": "22",
                "text": "Primary Aortic Disease, Marfan Syndrome"
            },
            {
                "code": "23",
                "text": "Primary Aortic Disease, Other Connective tissue disorder"
            },
            {
                "code": "38",
                "text": "Radiation induced heart disease"
            },
            {
                "code": "24",
                "text": "Reoperation - Failure of previous AV repair or replacement"
            },
            {
                "code": "25",
                "text": "Rheumatic"
            },
            {
                "code": "26",
                "text": "Supravalvular Aortic Stenosis"
            },
            {
                "code": "27",
                "text": "Trauma"
            },
            {
                "code": "28",
                "text": "Carcinoid"
            },
            {
                "code": "29",
                "text": "Tumor, Myxoma"
            },
            {
                "code": "30",
                "text": "Tumor, Papillary Fibroelastoma"
            },
            {
                "code": "31",
                "text": "Tumor, Other"
            },
            {
                "code": "32",
                "text": "Mixed Etiology"
            },
            {
                "code": "33",
                "text": "Not documented"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "vdaosievers"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "incidenc": {
        "longname": "Incidence",
        "definition": "Indicate if this is the patient's: <br>-first surgery <br>-first re-op surgery <br>-second re-op surgery <br>-third re-op surgery <br>-fourth or more re-op surgery.<br>-NA - not a cardiovascular surgery",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "First cardiovascular surgery"
            },
            {
                "code": "2",
                "text": "First re-op cardiovascular surgery"
            },
            {
                "code": "3",
                "text": "Second re-op cardiovascular surgery"
            },
            {
                "code": "4",
                "text": "Third re-op cardiovascular surgery"
            },
            {
                "code": "5",
                "text": "Fourth or more re-op cardiovascular surgery"
            },
            {
                "code": "6",
                "text": "NA - Not a cardiovascular surgery"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "status": {
        "longname": "Status",
        "definition": "Indicate the clinical status of the patient prior to entering the operating room.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Elective"
            },
            {
                "code": "2",
                "text": "Urgent"
            },
            {
                "code": "3",
                "text": "Emergent"
            },
            {
                "code": "4",
                "text": "Emergent Salvage"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "urgemergrsn"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "iabpwhen": {
        "longname": "IABP-When Inserted",
        "definition": "Indicate when the IABP was inserted.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Preop"
            },
            {
                "code": "2",
                "text": "Intraop"
            },
            {
                "code": "3",
                "text": "Postop"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "cathbasassistwhen": {
        "longname": "Temporary Assist Device When Inserted",
        "definition": "Indicate when the catheter based assist device was inserted.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Preop"
            },
            {
                "code": "2",
                "text": "Intraop"
            },
            {
                "code": "3",
                "text": "Postop"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "ecmowhen": {
        "longname": "ECMO Initiated",
        "definition": "Indicate when patient was placed on ECMO.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Preop"
            },
            {
                "code": "2",
                "text": "Intraop"
            },
            {
                "code": "3",
                "text": "Postop"
            },
            {
                "code": "4",
                "text": "Non-operative"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "vstrpr": {
        "longname": "VS - Tricuspid Valve Procedure Performed - Type",
        "definition": "Indicate the type of tricuspid procedure performed.  ",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Repair"
            },
            {
                "code": "2",
                "text": "Replacement"
            },
            {
                "code": "3",
                "text": "Surgical Prosthetic Valve Intervention (Not Explant of Valve)"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "vstsrepairtype",
            "vstcvtri",
            "vstvsurgprosthvalinttype"
        ],
        "parent": {
            "shortname": "vstv",
            "code": "3|4|5"
        },
        "selected": null
    },
    "procid": {
        "longname": null,
        "definition": null,
        "low": null,
        "high": null,
        "harvest": null,
        "format": null,
        "children": [],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "opcab": {
        "longname": "CAB",
        "definition": "Indicate whether coronary artery bypass grafting was done.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "3",
                "text": "Yes, planned"
            },
            {
                "code": "4",
                "text": "Yes, unplanned due to surgical complication"
            },
            {
                "code": "5",
                "text": "Yes, unplanned due to unsuspected disease or anatomy"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "numoartd",
            "numartvencomp",
            "numvenartcomp",
            "numartartcomp",
            "proxtech",
            "cabproximalsite01",
            "cabdistsite01",
            "cabconduit01",
            "cabdistpos01",
            "cabendart01",
            "cabveinpatang01",
            "cab02",
            "imaused",
            "distanastartcond",
            "venouscondused"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "opvalve": {
        "longname": "Valve",
        "definition": "Indicate whether a surgical procedure was done on the Aortic, Mitral, Tricuspid or Pulmonic valves.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Yes"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "valexp",
            "vsav",
            "vsmv",
            "vstv",
            "vspv",
            "opvalsurginput"
        ],
        "parent": {
            "shortname": null,
            "code": null
        },
        "selected": null
    },
    "vsav": {
        "longname": "VS-Aortic Valve",
        "definition": "Indicate whether an aortic valve procedure was performed.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "3",
                "text": "Yes, planned"
            },
            {
                "code": "4",
                "text": "Yes, unplanned due to surgical complication"
            },
            {
                "code": "5",
                "text": "Yes, unplanned due to unsuspected disease or anatomy"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "avaortaprocperf",
            "vsavpr",
            "anlrenl",
            "vsavpat",
            "avreplnoncorsin",
            "aorticimplant"
        ],
        "parent": {
            "shortname": "opvalve",
            "code": "1"
        },
        "selected": null
    },
    "vsavpr": {
        "longname": "VS-Aortic Valve Procedure",
        "definition": "Indicate the type of procedure that was performed on the aortic valve.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Replacement"
            },
            {
                "code": "2",
                "text": "Repair / Reconstruction"
            },
            {
                "code": "3",
                "text": "Surgical Prosthetic Valve Intervention (Not explant of valve)"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "vstcv",
            "vsavsurgrep",
            "vsavrcoma",
            "vsavrexsutan",
            "vsavrlplic",
            "vsavrnodrel",
            "vsavrptfe",
            "vsavrcomrs",
            "vsavrraphe",
            "vsavrringa",
            "vsavrlresect",
            "vsavrleafshav",
            "vsavrlppatch",
            "vsavrdeb",
            "vsavrperileak",
            "avprocreptype",
            "avsurgprosthvalint"
        ],
        "parent": {
            "shortname": "vsav",
            "code": "3|4|5"
        },
        "selected": null
    },
    "vstv": {
        "longname": "VS-Tricuspid Valve",
        "definition": "Indicate whether a tricuspid valve procedure was performed.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "3",
                "text": "Yes, planned"
            },
            {
                "code": "4",
                "text": "Yes, unplanned due to surgical complication"
            },
            {
                "code": "5",
                "text": "Yes, unplanned due to unsuspected disease or anatomy"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "vstrpr",
            "vstrrepair",
            "vstrreplace",
            "tricuspidimplant",
            "vstrvalvec"
        ],
        "parent": {
            "shortname": "opvalve",
            "code": "1"
        },
        "selected": null
    },
    "vsmv": {
        "longname": "VS-Mitral Valve",
        "definition": "Indicate whether a mitral valve procedure was performed.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "3",
                "text": "Yes, planned"
            },
            {
                "code": "4",
                "text": "Yes, unplanned due to surgical complication"
            },
            {
                "code": "5",
                "text": "Yes, unplanned due to unsuspected disease or anatomy"
            },
            {
                "code": "2",
                "text": "No"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "vsmvpr",
            "mitralimplant"
        ],
        "parent": {
            "shortname": "opvalve",
            "code": "1"
        },
        "selected": null
    },
    "vsmvpr": {
        "longname": "VS-Mitral Valve Procedure",
        "definition": "Indicate the type of procedure that was performed on the mitral valve.",
        "low": null,
        "high": null,
        "harvest": [
            {
                "code": "1",
                "text": "Repair"
            },
            {
                "code": "2",
                "text": "Replacement"
            },
            {
                "code": "3",
                "text": "Surgical Prosthetic Valve Intervention (Not explant of valve)"
            }
        ],
        "format": "Text (categorical values specified by STS)",
        "children": [
            "vsmvrepapp",
            "vsmitrfold",
            "vsmitrslidp",
            "vsmitradecalc",
            "vsmitrleaferp",
            "vsmitredge",
            "vsmitrmitcomm",
            "vsmitrmitcplasty",
            "vsmitrmitcleft",
            "vsmitparaprosleak",
            "mitralintent",
            "vschorpres",
            "vstcvmit",
            "surgprosvalint"
        ],
        "parent": {
            "shortname": "vsmv",
            "code": "3|4|5"
        },
        "selected": null
    }
}

export const EXCLUDED_FIELDS: object =
{
    "aortproc": {},
    "calculatedbmi": {},
    "ccanccase": {},
    "endovasproc": {},
    "ocaracd": {},
    "ocaracdle": {},
    "ocarafibintrales": {},
    "ocarafiblesloc": {},
    "ocarasdsec": {},
    "ocarcongproc1": {},
    "ocarcongproc2": {},
    "ocarcongproc3": {},
    "ocarcrtx": {},
    "ocarlasr": {},
    "ocarlva": {},
    "ocarothr": {},
    "ocarsubastenres": {},
    "ocarsvr": {},
    "ocartrma": {},
    "ocarvsd": {},
    "ocpulthromdis": {},
    "octumor": {},
    "onccaren": {},
    "oncother": {},
    "oncothor": {},
    "oncovasc": {},
    "opcab": {},
    "opvalve": {},
    "prevvadexp": {},
    "procid": {},
    "vadimptmg": {},
    "vadimptmg2": {},
    "vadimptmg3": {},
    "vexp": {},
    "vexp2": {},
    "vexp3": {},
    "vsav": {},
    "vsavpr": {},
    "vsmv": {},
    "vsmvpr": {},
    "vspv": {},
    "vstcv": {},
    "vstcvmit": {},
    "vstcvpu": {},
    "vstcvtri": {},
    "vstrpr": {},
    "vstrreplace": {},
    "vstrvalvec": {},
    "vstv": {}
}

export const PROCEDURES: object[] = [
    { 'code': '1', 'text': 'Isolated CAB' },
    { 'code': '2', 'text': 'Isolated AVR' },
    { 'code': '3', 'text': 'Isolated MVR' },
    { 'code': '4', 'text': 'AVR + CAB' },
    { 'code': '5', 'text': 'MVR + CAB' },
    { 'code': '7', 'text': 'MV Repair' },
    { 'code': '8', 'text': 'MV Repair + CAB' }
]

export const SCORES: object[] = [
    { "longname": "Risk of Mortality", "shortname": "predmort", 'value': null },
    { "longname": "Renal Failure", "shortname": "predrenf", 'value': null },
    { "longname": "Permanent Stroke", "shortname": "predstro", 'value': null },
    { "longname": "Prolonged Ventilation", "shortname": "predvent", 'value': null },
    { "longname": "DSW Infection", "shortname": "preddeep", 'value': null },
    { "longname": "Reoperation", "shortname": "predreop", 'value': null },
    { "longname": "Morbidity or Mortality", "shortname": "predmm", 'value': null },
    { "longname": "Short Length of Stay", "shortname": "pred6d", 'value': null },
    { "longname": "Long Length of Stay", "shortname": "pred14d", 'value': null }
]

export const COEFFS: object[] = [
    { "longname": "Risk of Mortality", "shortname": "coeff_predmort", 'value': null },
    { "longname": "Renal Failure", "shortname": "coeff_predrenf", 'value': null },
    { "longname": "Permanent Stroke", "shortname": "coeff_predstro", 'value': null },
    { "longname": "Prolonged Ventilation", "shortname": "coeff_predvent", 'value': null },
    { "longname": "DSW Infection", "shortname": "coeff_preddeep", 'value': null },
    { "longname": "Reoperation", "shortname": "coeff_predreop", 'value': null },
    { "longname": "Morbidity or Mortality", "shortname": "coeff_predmm", 'value': null },
    { "longname": "Short Length of Stay", "shortname": "coeff_pred6d", 'value': null },
    { "longname": "Long Length of Stay", "shortname": "coeff_pred14d", 'value': null }
]

export const DISPLAY_NAMES: object =
{
    "age": "Age",
    "gender": "Gender",
    "raceblack": "Race - Black/African American",
    "raceasian": "Race - Asian",
    "racenativeam": "Race - American Indian / Alaskan Native",
    "racnativepacific": "Race - Native Hawaiian / Pacific Islander",
    "ethnicity": "Hispanic, Latino or Spanish Ethnicity",
    "payorprim": "Primary Payor",
    "payorsecond": "Secondary (Supplemental) Payor",
    "weightkg": "Weight Kg ",
    "heightcm": "Height Cm",
    "hct": "Hematocrit",
    "wbc": "WBC Count",
    "platelets": "Platelet Count",
    "creatlst": "Last Creatinine Level",
    "dialysis": "Dialysis",
    "hypertn": "Hypertension",
    "immsupp": "Immunocompromise Present",
    "pvd": "Peripheral Artery Disease",
    "cvd": "Cerebrovascular Disease",
    "cvdtia": "CVD TIA",
    "cvdpcarsurg": "History of previous carotid artery surgery and/or stenting",
    "mediastrad": "Mediastinal Radiation",
    "cancer": "Cancer Within 5 Years",
    "fhcad": "Family History of Premature Coronary Artery Disease",
    "slpapn": "Sleep Apnea",
    "liverdis": "Liver Disease",
    "unrespstat": "Unresponsive State",
    "syncope": "Syncope",
    "diabetes": "Diabetes",
    "diabctrl": "Diabetes-Control",
    "infendo": "Endocarditis",
    "infendty": "Endocarditis Type",
    "cva": "Prior CVA",
    "cvawhen": "Prior CVA-When",
    "chrlungd": "Chronic Lung Disease",
    "cvdstenrt": "Severity of stenosis on the right carotid artery documented",
    "cvdstenlft": "Severity of stenosis on the left carotid artery documented",
    "ivdrugab": "Illicit Drug Use",
    "alcohol": "Alcohol Use",
    "pneumonia": "Pneumonia",
    "tobaccouse": "Tobacco use",
    "hmo2": "Home Oxygen",
    "prcab": "Previous coronary artery bypass (CAB)",
    "prvalve": "Previous valve procedure",
    "prvalveproc1": "Prev Valve Procedure 1",
    "prvalveproc2": "Prev Valve Procedure 2",
    "prvalveproc3": "Prev Valve Procedure 3",
    "prvalveproc4": "Prev Valve Procedure 4",
    "prvalveproc5": "Prev Valve Procedure 5",
    "poc": "Other Previous Cardiac Interventions",
    "pocint1": "Previous Other Cardiac Interventions 1",
    "pocint2": "Previous Other Cardiac Interventions 2",
    "pocint3": "Previous Other Cardiac Interventions 3",
    "pocint4": "Previous Other Cardiac Interventions 4",
    "pocint5": "Previous Other Cardiac Interventions 5",
    "pocint6": "Previous Other Cardiac Interventions 6",
    "pocint7": "Previous Other Cardiac Interventions 7",
    "pocpci": "Previous PCI",
    "pocpciwhen": "PCI Performed Within This Episode Of Care",
    "pocpciin": "PCI Interval",
    "prcvint": "Previous Cardiac Interventions",
    "miwhen": "MI When",
    "heartfailtmg": "Heart Failure Timing",
    "classnyh": "Classification-NYHA",
    "cardsymptimeofadm": "At time of this admission",
    "carshock": "Cardiogenic Shock",
    "arrhythatrfib": "AFibrillation",
    "arrhythafib": "Atrial Fibrillation Type",
    "arrhythaflutter": "Aflutter",
    "arrhyththird": "Third Degree Heart Block",
    "arrhythsecond": "Second Degree Heart Block",
    "arrhythsss": "Sick Sinus",
    "arrhythvv": "Vtach/Vfib",
    "medadpidis": "ADP Inhibitors Discontinuation (# days prior to surgery)",
    "medinotr": "Inotropic, intravenous",
    "medadp5days": "ADP Inhibitor (includes P2Y12)",
    "medacei48": "ACE or ARB",
    "medbeta": "Beta Blocker",
    "medster": "Steroids",
    "medgp": "Glycoprotein IIb/IIIa",
    "resusc": "Resuscitation",
    "numdisv": "Number Diseased Vessels",
    "pctstenlmain": "Percent Stenosis - Left Main",
    "hdef": "Ejection Fraction",
    "pctstenproxlad": "Percent Stenosis - Proximal LAD",
    "vdstena": "Aortic Stenosis",
    "vdstenm": "Mitral Stenosis",
    "vdinsufa": "Aortic Insufficiency",
    "vdinsufm": "Mitral Insufficiency",
    "vdinsuft": "Tricuspid Insufficiency",
    "vdaoprimet": "AV Disease Etiology",
    "incidenc": "Incidence",
    "status": "Status",
    "vstrrepair": "Repair",
    "iabpwhen": "IABP Insertion",
    "cathbasassistwhen": "Catheter Based Assist Device Used",
    "ecmowhen": "ECMO",
    // Below are ones that don't show up on form but show up on the print variables page
    "vstv": "Tricuspid Valve",
    "vsmv": "Mitral Valve",
    "opvalve": "Valve",
    "vsmvpr": "Mitral Valve Procedure",
    "opcab": "CAB",
    "vsav": "Aortic Valve",
    "vsavpr": "Aortic Valve Procedure"
}



// WEBPACK FOOTER //
// /home/jenkins/agent/workspace/risk-calc_develop/risk-calc-ts/src/app/fields.ts