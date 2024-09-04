export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: new Date(Date.now()),
    gender: "male" as Gender,
    address: "",
    occupation: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    primaryPhysician: "",
    hmoProvider: "",
    hmoNumber: "",
    allergies: "",
    currentMedication: "",
    familyMedicalHistory: "",
    pastMedicalHistory: "",
    identificationType: "Birth Certificate",
    identificationNumber: "",
    identificationDocument: [],
    treatmentConsent: false,
    disclosureConsent: false,
    privacyConsent: false,
  };
  
  export const IdentificationTypes = [
    "Birth Certificate",
    "Driver's License",
    "Medical Insurance Card/Policy",
    "Military ID Card",
    "National Identity Card",
    "Passport",
    "Resident Alien Card (Green Card)",
    "Social Security Card",
    "State ID Card",
    "Student ID Card",
    "Voter ID Card",
  ];
  
  export const Doctors = [
    {
      image: "/assets/images/dr-strange.png",
      name: "Joaquin Strange",
    },
    {
      image: "/assets/images/dr-ziesmer.png",
      name: "Rebekah Ziesmer",
    },
    {
      image: "/assets/images/dr-wily.png",
      name: "Christian Wily",
    },
    {
      image: "/assets/images/dr-hogarth.png",
      name: "Stephen Hogarth",
    },
    {
      image: "/assets/images/dr-strizich.png",
      name: "Kyra Strizich",
    },
    {
      image: "/assets/images/dr-devera.png",
      name: "Nico De Vera",
    },
    {
      image: "/assets/images/dr-esturninos.png",
      name: "Joyce Esturninos",
    },
    {
      image: "/assets/images/dr-behlke.png",
      name: "Athena Behlke",
    },
    {
      image: "/assets/images/dr-vanwoert.png",
      name: "David Vanwoert",
    },
  ];
  
  export const StatusIcon = {
    scheduled: "/assets/icons/check.svg",
    pending: "/assets/icons/pending.svg",
    cancelled: "/assets/icons/cancelled.svg",
  };