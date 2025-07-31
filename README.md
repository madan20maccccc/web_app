### 3. Language and Technical Stack

Our **OPD Prescription App** enables doctors to generate accurate, bilingual, and AI-assisted prescriptions from live voice conversations with patients. The solution integrates **BHASHINI APIs** for multilingual speech processing and **OpenAI’s ChatGPT API** for intelligent summarization and entity extraction. The final output is a structured prescription draft, with support for **SNOMED-CT** and **FHIR** currently under active development.

---

#### 🔁 End-to-End Workflow: From Voice to Drafted Prescription

Our real-time pipeline converts speech into structured clinical output as follows:

1. **🎙️ Voice Input Capture**  
   - Doctors initiate recording using a tap-to-record mic button.
   - Audio is captured using Flutter plugins with voice activity monitoring and permission handling.

2. **🌐 Language Detection**  
   - BHASHINI’s **ALD API** detects the spoken Indian language automatically.

3. **🗣️ Speech-to-Text (ASR)**  
   - The voice is transcribed using **BHASHINI ASR API**, producing regional-language text.

4. **📝 Punctuation and Normalization**  
   - Text is cleaned using BHASHINI’s TN-ITN and punctuation services for grammar and number handling.

5. **🌍 Translation (if needed)**  
   - If the language is not English, BHASHINI’s **Translation API** converts it to English.

6. **🤖 Entity Extraction & Summarization**  
   - The final English transcript is sent to **OpenAI ChatGPT API** (gpt-4 or gpt-3.5-turbo) to extract:
     - Patient complaints
     - Diagnosis (if mentioned)
     - Prescribed medicines (name, strength, dosage, duration)
     - Lifestyle or follow-up advice

7. **📌 SNOMED-CT Integration** *(In Progress)*  
   - A local JSON-based lookup for SNOMED-CT codes is being developed to standardize extracted medical entities.

8. **📦 FHIR Output Generation** *(In Progress)*  
   - A custom script is under development to convert structured prescription data into **FHIR-compliant JSON** for integration with **eHospital** and **ABDM**.

9. **📄 Prescription Draft Generation**  
   - A formatted and shareable PDF is generated showing:
     - Doctor details
     - Patient details
     - Structured prescription
     - Timestamp and QR (optional)

10. **☁️ Data Storage**  
   - Audio, transcripts, and prescription PDFs are stored securely in **Firebase Storage**.
   - Associated metadata is saved in **Firestore** for future reference or sharing.

---

#### 🔧 Technology Stack Overview

| **Component**                  | **Technology / Tool**                            | **Purpose**                                         |
|-------------------------------|--------------------------------------------------|-----------------------------------------------------|
| **Frontend**                   | Flutter (Dart)                                   | Cross-platform mobile UI                           |
| **Authentication & Database** | Firebase Auth, Firebase Firestore                | User login, patient record storage                 |
| **Voice Capture**             | Flutter Sound, Mic Permissions                   | Real-time voice recording                          |
| **Language Detection**        | BHASHINI ALD API                                 | Detect Indian language                             |
| **Speech to Text**            | BHASHINI ASR API                                 | Transcribe voice to text                           |
| **Translation**               | BHASHINI Translation API                         | Convert native language text to English            |
| **Punctuation / TN-ITN**      | BHASHINI Modules                                 | Normalize numbers, insert punctuation              |
| **LLM Integration**           | OpenAI ChatGPT API (gpt-4 / gpt-3.5-turbo)       | Extract medical data, summarize prescription       |
| **SNOMED-CT Mapping**         | Local JSON-based Lookup *(In Progress)*          | Standardize medical terms to SNOMED codes          |
| **FHIR Conversion**           | Flutter-Python bridge *(In Progress)*            | Generate FHIR JSON prescription format             |
| **PDF Report**                | Flutter `pdf` & `printing` packages              | Shareable prescription document                    |
| **Storage**                   | Firebase Storage                                 | Save audio, transcripts, PDFs                      |

---

#### 🌐 Indian Language Support

Our app supports **real-time bilingual and multilingual consultations** using BHASHINI APIs. The system dynamically detects and processes the spoken language without requiring manual selection.

Currently tested and supported languages include:

**Hindi**, **Tamil**, **Telugu**, **Kannada**, **Malayalam**, **Gujarati**, **Marathi**, **Punjabi**, **Bengali**, **Odia**, **Urdu**, **Assamese**.

- Doctors and patients can speak in **different Indian languages** during the same consultation.
- Language detection and translation are fully **automated via BHASHINI ALD + Translation APIs**.
- Final prescription and structured data are always in **English**, ensuring integration with medical standards and systems.
- The system is **scalable to all 22+ official Indian languages** supported by BHASHINI with minimal configuration.

---

#### 📦 Submission Package Includes:

- ✅ Flutter app code (clean architecture + provider state mgmt)
- ✅ Firebase configuration files
- ✅ Sample audio input + BHASHINI ASR responses
- ✅ ChatGPT API prompt examples and extracted output
- ✅ Placeholder JSON for SNOMED mapping (in development)
- ✅ PDF samples of draft prescriptions
- ✅ README with setup + usage instructions
- ✅ Screenshots and (optional) demo video link

---

