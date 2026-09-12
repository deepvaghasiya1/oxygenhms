# OxygenHMS Database Schema

## Collections Overview

### User Collection
```javascript
{
  _id: ObjectId,
  firstName: String,
  lastName: String,
  email: String (unique),
  phone: String,
  password: String (hashed),
  role: [String], // 'admin', 'doctor', 'nurse', etc.
  department: ObjectId (ref: Department),
  isActive: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date,
  profile: {
    avatar: String,
    bio: String,
    specialization: String,
    registrationNumber: String
  },
  permissions: [String]
}
```

### Patient Collection
```javascript
{
  _id: ObjectId,
  mrn: String (unique), // Medical Record Number
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  dob: Date,
  gender: String, // 'M', 'F', 'Other'
  bloodGroup: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  emergencyContact: {
    name: String,
    phone: String,
    relation: String
  },
  registrationDate: Date,
  insuranceDetails: {
    provider: String,
    policyNumber: String,
    validTill: Date
  },
  medicalHistory: [
    {
      condition: String,
      diagnosisDate: Date,
      status: String
    }
  ],
  allergies: [String],
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Appointment Collection
```javascript
{
  _id: ObjectId,
  appointmentNumber: String (unique),
  patient: ObjectId (ref: Patient),
  doctor: ObjectId (ref: User),
  department: ObjectId (ref: Department),
  appointmentDate: Date,
  startTime: String, // HH:mm
  endTime: String,
  duration: Number, // in minutes
  type: String, // 'OPD', 'Teleconsultation'
  status: String, // 'Scheduled', 'In Progress', 'Completed', 'Cancelled'
  reason: String,
  notes: String,
  checkedInAt: Date,
  consultationNotes: String,
  prescription: ObjectId (ref: Prescription),
  createdBy: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

### Prescription Collection
```javascript
{
  _id: ObjectId,
  prescriptionNumber: String (unique),
  patient: ObjectId (ref: Patient),
  doctor: ObjectId (ref: User),
  appointment: ObjectId (ref: Appointment),
  medicines: [
    {
      medication: ObjectId (ref: Medication),
      dosage: String,
      frequency: String,
      duration: Number, // in days
      instructions: String,
      quantity: Number
    }
  ],
  testOrders: [
    {
      test: ObjectId (ref: LabTest),
      reason: String
    }
  ],
  radiologyOrders: [
    {
      procedure: ObjectId (ref: RadiologyProcedure),
      reason: String
    }
  ],
  generalNotes: String,
  followUpDate: Date,
  issuedDate: Date,
  validTill: Date,
  status: String, // 'Active', 'Expired', 'Cancelled'
  dispensedAt: Date,
  dispensedBy: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

### Medication Collection
```javascript
{
  _id: ObjectId,
  name: String,
  genericName: String,
  strength: String,
  form: String, // 'Tablet', 'Syrup', 'Injection'
  manufacturer: String,
  batchNumber: String,
  expiryDate: Date,
  hsn: String,
  gst: Number,
  mrp: Number,
  category: String,
  sideEffects: [String],
  contraindications: [String],
  drugInteractions: [String],
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Lab Test Collection
```javascript
{
  _id: ObjectId,
  testNumber: String (unique),
  patient: ObjectId (ref: Patient),
  doctor: ObjectId (ref: User),
  prescription: ObjectId (ref: Prescription),
  testName: String,
  description: String,
  specimen: String, // 'Blood', 'Urine', etc.
  specimenCollectedAt: Date,
  collectedBy: ObjectId (ref: User),
  status: String, // 'Ordered', 'Collected', 'Processing', 'Completed'
  results: {
    value: String,
    unit: String,
    normalRange: String,
    testDate: Date,
    testedBy: ObjectId (ref: User),
    remarks: String
  },
  reportGeneratedAt: Date,
  verifiedBy: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

### Ward Collection
```javascript
{
  _id: ObjectId,
  wardNumber: String (unique),
  name: String,
  capacity: Number,
  type: String, // 'General', 'ICU', 'NICU'
  department: ObjectId (ref: Department),
  beds: [
    {
      bedNumber: String,
      status: String, // 'Available', 'Occupied', 'Maintenance'
      patient: ObjectId (ref: Patient),
      admittedDate: Date,
      expectedDischargeDate: Date
    }
  ],
  staff: [ObjectId], // refs to User (nurses)
  createdAt: Date,
  updatedAt: Date
}
```

### Billing Collection
```javascript
{
  _id: ObjectId,
  billNumber: String (unique),
  patient: ObjectId (ref: Patient),
  billDate: Date,
  billType: String, // 'OPD', 'IPD', 'Emergency'
  items: [
    {
      description: String,
      quantity: Number,
      rate: Number,
      amount: Number
    }
  ],
  subtotal: Number,
  discount: Number,
  tax: Number,
  totalAmount: Number,
  paidAmount: Number,
  balanceAmount: Number,
  paymentMethod: String, // 'Cash', 'Card', 'Cheque'
  paymentStatus: String, // 'Paid', 'Partial', 'Pending'
  insuranceClaim: {
    claimNumber: String,
    claimStatus: String,
    approvedAmount: Number
  },
  createdBy: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

### Department Collection
```javascript
{
  _id: ObjectId,
  name: String,
  code: String (unique),
  description: String,
  head: ObjectId (ref: User),
  phone: String,
  email: String,
  location: String,
  staff: [ObjectId], // refs to User
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Appointment Slot Collection
```javascript
{
  _id: ObjectId,
  doctor: ObjectId (ref: User),
  date: Date,
  startTime: String,
  endTime: String,
  duration: Number,
  maxPatients: Number,
  bookedPatients: Number,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Audit Log Collection
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  action: String, // 'CREATE', 'UPDATE', 'DELETE', 'VIEW'
  module: String,
  entityType: String,
  entityId: ObjectId,
  oldValue: Object,
  newValue: Object,
  ipAddress: String,
  userAgent: String,
  status: String, // 'Success', 'Failure'
  timestamp: Date
}
```

## Indexes

```javascript
// User indexes
db.users.createIndex({ email: 1 }, { unique: true })
db.users.createIndex({ role: 1 })
db.users.createIndex({ department: 1 })

// Patient indexes
db.patients.createIndex({ mrn: 1 }, { unique: true })
db.patients.createIndex({ email: 1 })
db.patients.createIndex({ phone: 1 })

// Appointment indexes
db.appointments.createIndex({ patient: 1 })
db.appointments.createIndex({ doctor: 1 })
db.appointments.createIndex({ appointmentDate: 1 })
db.appointments.createIndex({ status: 1 })

// Lab Test indexes
db.labtests.createIndex({ patient: 1 })
db.labtests.createIndex({ testNumber: 1 }, { unique: true })
db.labtests.createIndex({ status: 1 })

// Billing indexes
db.bills.createIndex({ patient: 1 })
db.bills.createIndex({ billNumber: 1 }, { unique: true })
db.bills.createIndex({ billDate: 1 })

// Audit Log indexes
db.auditlogs.createIndex({ user: 1, timestamp: -1 })
db.auditlogs.createIndex({ entityType: 1, entityId: 1 })
```
