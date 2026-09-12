# OxygenHMS User Roles and Permissions

## Role Hierarchy

### 1. Administrator
**Description**: Full system access and tenant-wide configuration

**Permissions**:
- User management (create, edit, delete, activate/deactivate)
- System configuration
- Tenant settings
- Department management
- Role and permission management
- Audit logs
- Backup and recovery
- System upgrades
- Access all modules

**Key Features**:
- Dashboard with system statistics
- User management interface
- System settings configuration
- Tenant management
- Audit trail viewer

---

### 2. Doctor
**Description**: OPD/IPD management, prescriptions, orders and clinical workflow

**Permissions**:
- View assigned patients
- Create/edit patient medical records
- Write prescriptions
- Order lab tests
- Order imaging/radiology
- Create referrals
- Manage OPD consultations
- Manage IPD admissions
- Record vital signs
- Create discharge summaries
- View lab/imaging results

**Key Features**:
- OPD appointment list
- IPD patient list
- Patient medical history
- Prescription management
- Test ordering
- Clinical notes

---

### 3. Nurse
**Description**: Ward management, medications and bedside care

**Permissions**:
- View ward patients
- Record vital signs
- Manage medication administration
- Update patient status
- Record nursing notes
- Manage bed allocation
- Monitor patient progress
- Generate bed management reports

**Key Features**:
- Ward dashboard
- Bed management
- Medication chart
- Vital signs monitoring
- Patient vitals recording
- Nursing notes

---

### 4. Receptionist
**Description**: Registration, appointments, check-in and front desk billing

**Permissions**:
- Patient registration
- Appointment booking
- Patient check-in
- Generate invoices
- Payment recording
- Patient documents management
- Appointment scheduling
- Follow-up calls scheduling

**Key Features**:
- Registration form
- Appointment calendar
- Check-in interface
- Billing counter
- Patient queue management

---

### 5. Lab Technician
**Description**: Lab worklists, sample flow and verification

**Permissions**:
- View assigned test orders
- Update sample collection status
- Record test results
- Manage lab inventory
- Generate lab reports
- Update equipment maintenance
- Verify test results

**Key Features**:
- Worklist management
- Sample tracking
- Result entry
- Lab reports
- Quality control

---

### 6. Pharmacist
**Description**: Dispensing, drug master and pharmacy inventory

**Permissions**:
- View prescriptions
- Dispense medications
- Manage pharmacy inventory
- Create purchase orders
- Update drug master
- Monitor stock levels
- Record drug interactions
- Generate pharmacy reports

**Key Features**:
- Prescription counter
- Inventory management
- Drug master maintenance
- Stock management
- Dispensing form

---

### 7. Billing & Finance
**Description**: Billing operations, revenue tracking and insurance

**Permissions**:
- Generate bills/invoices
- Track payments
- Manage insurance claims
- Reconciliation
- Generate financial reports
- Manage payment methods
- Track outstanding payments
- Create billing policies

**Key Features**:
- Billing dashboard
- Invoice generation
- Payment tracking
- Insurance claims
- Revenue reports

---

### 8. Radiologist
**Description**: Radiology worklists, reporting and imaging coordination

**Permissions**:
- View imaging orders
- Record imaging reports
- Upload imaging files
- View previous imaging
- Generate radiology reports
- Schedule imaging procedures
- Coordinate with technicians

**Key Features**:
- Worklist management
- Report generation
- Image viewer
- DICOM viewer (optional)
- Report templates

---

### 9. OT Coordinator
**Description**: OT scheduling, rooms, teams and peri-op workflow

**Permissions**:
- Schedule operations
- Allocate OT rooms
- Assign surgical teams
- Manage OT inventory
- Track surgical schedules
- Manage consent forms
- Record anesthesia details
- Generate OT reports

**Key Features**:
- OT scheduling calendar
- Room allocation
- Team assignment
- Surgical schedule
- Pre-op checklist

---

### 10. Inventory Manager
**Description**: Stock, procurement and supply chain control

**Permissions**:
- Manage stock inventory
- Create purchase orders
- Receive goods
- Manage suppliers
- Track stock movements
- Generate stock reports
- Set reorder levels
- Manage stock expiry

**Key Features**:
- Stock dashboard
- Purchase orders
- Stock tracking
- Supplier management
- Inventory reports

---

### 11. Emergency/ER Staff
**Description**: Triage, cases, observation and ambulance workflow

**Permissions**:
- Register ER cases
- Perform triage
- Record vital signs
- Create emergency notes
- Manage observation beds
- Coordinate ambulance
- Generate ER reports
- Manage ER queue

**Key Features**:
- ER dashboard
- Triage form
- Case management
- Ambulance tracking
- ER queue

---

### 12. HR & Staff
**Description**: Staff operations, attendance and workforce planning

**Permissions**:
- Manage staff records
- Track attendance
- Manage leaves
- Process payroll
- Schedule staff
- Generate HR reports
- Manage recruitment
- Track performance

**Key Features**:
- Staff directory
- Attendance tracking
- Leave management
- Payroll processing
- Schedule management

---

### 13. Dialysis Unit Manager
**Description**: Dialysis sessions and consumables management

**Permissions**:
- Schedule dialysis sessions
- Manage patient records
- Track dialysis sessions
- Monitor equipment
- Manage consumables
- Generate session reports
- Record patient vitals

**Key Features**:
- Session scheduler
- Patient records
- Equipment tracking
- Consumables inventory
- Session reports

---

### 14. CRM & Patient Relations
**Description**: Patient relationship management

**Permissions**:
- Manage patient feedback
- Track patient interactions
- Manage complaints
- Send communications
- Track patient satisfaction
- Generate CRM reports
- Manage patient relations

**Key Features**:
- Patient interactions
- Feedback management
- Complaint tracking
- Communication logs
- Satisfaction surveys

---

## Permission Matrix

| Feature | Admin | Doctor | Nurse | Receptionist | Lab | Pharmacist | Billing | Radiologist | OT | Inventory | ER | HR | Dialysis | CRM |
|---------|-------|--------|-------|--------------|-----|-----------|---------|-------------|----|-----------|----|----|---------|-----------|
| User Management | ✓ | - | - | - | - | - | - | - | - | - | - | - | - | - |
| Patient Registration | ✓ | - | - | ✓ | - | - | - | - | - | - | ✓ | - | - | ✓ |
| View Medical Records | ✓ | ✓ | ✓ | - | - | - | - | - | - | - | ✓ | - | - | - |
| Create Prescriptions | ✓ | ✓ | - | - | - | - | - | - | - | - | ✓ | - | - | - |
| Dispense Medications | ✓ | - | - | - | - | ✓ | - | - | - | - | - | - | - | - |
| Generate Bills | ✓ | - | - | ✓ | - | - | ✓ | - | - | - | - | - | - | - |
| Manage Inventory | ✓ | - | - | - | - | - | - | - | - | ✓ | - | - | ✓ | - |
| Create Reports | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

## Authorization Levels

1. **Super Admin** - Unrestricted access to all features
2. **Admin** - Tenant-wide access (limited by tenant)
3. **Department Head** - Department-wide access
4. **Supervisor** - Team/shift-level access
5. **User** - Personal/assigned records access
