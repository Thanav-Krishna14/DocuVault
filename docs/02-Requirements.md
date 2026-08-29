# DocuVault — V1 Requirements

## 1. Overview

DocuVault is a responsive web application for securely storing and organizing important personal and family documents.

The main goal of V1 is to allow a user to:

* Create an account
* Upload and organize documents
* Keep documents private
* Find documents easily
* View or download documents when needed
* Recover accidentally deleted documents

V1 focuses on building a simple, useful and secure foundation. Advanced features such as document expiry tracking, family accounts and AI-based document recognition will be considered for later versions.

---

# 2. Platform

DocuVault V1 will be developed as a:

**Responsive Web Application**

It should work on:

* Desktop/laptop browsers
* Mobile browsers

A Progressive Web App (PWA) or native mobile application may be considered in a future version.

---

# 3. V1 User

V1 has one primary user type:

### Personal User

A user who wants to store and organize their own important documents.

Every user's documents must remain private to that user unless explicit sharing functionality is introduced in a future version.

---

# 4. Core User Flow

The main V1 flow is:

```text
Register
   ↓
Login
   ↓
Dashboard
   ↓
Choose an action
   ├── My Documents
   ├── Upload Document
   ├── Search Documents
   ├── Trash
   └── Profile
   ↓
Manage Documents
```

---

# 5. Registration & Authentication

## 5.1 Registration

A new user can create an account using:

* Name
* Email
* Password

Email verification is **not required in V1**.

## 5.2 Login

A registered user can log in using:

* Email
* Password

## 5.3 Forgot Password

The user can request a password reset if they forget their password.

V1 will use the authentication provider's password-reset mechanism rather than implementing a custom OTP system.

## 5.4 Logout

The user can securely log out of their account.

## 5.5 Session

The user remains authenticated while their valid session exists.

If the session expires, the application should require the user to log in again.

---

# 6. Dashboard

After successful login, the user should reach a dashboard rather than immediately seeing all documents.

The dashboard provides navigation to:

* My Documents
* Upload Document
* Search Documents
* Trash
* Profile
* Logout

## 6.1 Dashboard Summary

The dashboard should show a small useful summary without displaying the complete document collection.

Example:

```text
Documents: 12
In Trash: 2
```

The exact summary can be adjusted during UI design.

The purpose is to provide useful information without cluttering the home screen.

---

# 7. Document Upload

## 7.1 Upload Methods

The user can:

* Upload one document
* Select multiple documents for batch upload

Each selected document must be configured individually.

## 7.2 Supported File Types

V1 supports:

* PDF
* JPG
* JPEG
* PNG

Other file types are outside the V1 scope.

## 7.3 File Size

Maximum file size:

**20 MB per document**

The limit may be increased in a future version if required.

## 7.4 Document Name

Every uploaded document must have a user-defined name.

Example:

```text
Father's Aadhaar
Mother's PAN Card
Car Insurance
College ID
10th Marks Memo
```

The user-defined name is the primary display and search name.

The original filename may be preserved internally, but it should not be the primary name shown to the user.

## 7.5 Category

Every document must have a category.

V1 uses predefined categories rather than allowing arbitrary category names.

Initial categories:

* Identity
* Education
* Vehicle
* Insurance
* Finance
* Property
* Bills
* Warranty
* Other

The category list may be refined during development.

## 7.6 Multiple Uploads

When multiple files are selected, each file must have:

* Its own document name
* Its own category

Example:

```text
aadhaar.jpg
Name: Father's Aadhaar
Category: Identity

pan.pdf
Name: Father's PAN Card
Category: Identity
```

The user can remove a selected file before uploading.

## 7.7 Upload Progress

The application should show upload progress for files being uploaded.

For multiple files, progress should be identifiable per file where practical.

## 7.8 Upload Errors

The application should provide clear errors for problems such as:

* Unsupported file type
* File larger than 20 MB
* Network failure
* Upload failure

Failed uploads should be retryable.

## 7.9 Duplicate Warning

If a possible duplicate is detected, DocuVault should warn the user rather than automatically rejecting the document.

Example:

```text
Possible duplicate

"Father's Aadhaar" already exists.

[Keep Both] [Cancel Upload]
```

V1 duplicate detection can use simple document metadata such as the user's document name/category.

Advanced file-content comparison is outside V1.

---

# 8. My Documents

The My Documents page contains the user's stored documents.

## 8.1 Card View

Card View is the default display.

Example:

```text
┌──────────────────────┐
│ 📄                   │
│ Father's Aadhaar     │
│ Identity             │
│ Added: Aug 28        │
│                      │
│ View       ⋮         │
└──────────────────────┘
```

## 8.2 List View

The user can switch to List View when they want a more compact representation.

Example:

```text
Document              Category      Added

Father's Aadhaar      Identity      Aug 28
Mother's PAN Card     Identity      Aug 27
Car Insurance         Insurance     Aug 25
```

Both views represent the same underlying documents.

## 8.3 Responsive Design

The document interface should adapt to different screen sizes.

On smaller screens, documents should be displayed in a usable single-column or otherwise mobile-friendly layout.

---

# 9. View Document

The user should be able to view a document inside DocuVault where the file format/browser supports in-app viewing.

Viewing a document should not automatically download a new copy.

---

# 10. Download Document

Download must be a separate action.

The user can explicitly choose:

```text
Download
```

to save the document to their device.

---

# 11. Edit Document

The user can edit document metadata after upload.

Editable information:

* Document name
* Category

The actual uploaded file is not replaced simply by changing its name or category.

---

# 12. Search

## 12.1 Search by User-Defined Name

The primary search field searches the name given to the document by the user.

Example:

```text
Search: Father's Aadhaar
```

The original filename is not the primary search term.

## 12.2 Category Filter

Search can be combined with a category filter.

Example:

```text
Search: Card

Category: Identity
```

Available filter options include:

* All
* Identity
* Education
* Vehicle
* Insurance
* Finance
* Property
* Bills
* Warranty
* Other

## 12.3 Search Privacy

Search results must contain only documents the currently authenticated user is authorized to access.

A user's search must never reveal another user's documents.

---

# 13. Trash / Deleted Documents

Deleting an important document should not immediately destroy it.

## 13.1 Move to Trash

Selecting Delete moves the document to Trash.

The user should receive a confirmation before the action.

Example:

```text
Are you sure you want to move
"Father's Aadhaar" to Trash?

[Cancel] [Move to Trash]
```

## 13.2 30-Day Retention

Deleted documents remain in Trash for:

**30 days**

The countdown begins from the date/time the document was deleted.

Example:

```text
Deleted: 20 August
Permanent deletion: 19 September
```

## 13.3 Restore

The user can restore a document from Trash during the 30-day period.

Restored documents return to the normal document collection.

## 13.4 Permanent Delete

The user can permanently delete a document manually from Trash.

## 13.5 Automatic Permanent Deletion

After 30 days, the document is permanently deleted.

V1 should treat this as a soft-delete/retention process rather than immediately destroying the file when the user first clicks Delete.

---

# 14. Privacy & Security

Security is a core requirement of DocuVault because documents may contain sensitive personal information.

## 14.1 Document Ownership

Every document must belong to a specific user.

Conceptually:

```text
User ID
   ↓
Document ID
   ↓
Private File
```

## 14.2 Private Access

By default, only the document owner can:

* View
* Download
* Edit
* Delete
* Restore
* Search for

their documents.

## 14.3 Unauthorized Access

If User A attempts to access User B's document:

```text
Request
   ↓
Authentication
   ↓
Authorization
   ↓
Does User A own/have permission for document?
   ↓
NO
   ↓
Access denied
```

The application must not rely only on hiding documents/buttons in the frontend.

Authorization must be enforced by the backend/storage security layer.

## 14.4 Search Authorization

Unauthorized documents must never appear in search results.

## 14.5 Storage

Actual document files should be stored in private cloud storage rather than being exposed as publicly accessible files.

Document metadata and the actual stored file are logically separate:

```text
Database
   └── Document metadata
        ├── Document ID
        ├── Owner ID
        ├── Name
        ├── Category
        └── File reference

Private Storage
   └── Actual document file
```

The exact database schema and storage architecture will be decided during the technical design phase.

---

# 15. Network & Failure Handling

DocuVault V1 requires an internet connection for cloud-dependent operations.

## 15.1 Offline State

If the internet connection is lost, the application should clearly inform the user.

Example:

```text
🔴 You're offline.

Some features are currently unavailable.
```

## 15.2 Interrupted Upload

If an upload fails because of network problems:

* The user should be informed.
* The upload should not silently disappear.
* The user should be able to retry.

V1 does not need full offline-first document management or background synchronization.

## 15.3 Loading States

Long-running operations should show a loading/progress state.

Examples:

* Loading documents
* Uploading
* Deleting
* Restoring
* Downloading

The user should receive feedback instead of wondering whether an action worked.

---

# 16. Empty States

## 16.1 No Documents

A new user should see:

```text
📁

No documents yet.

Keep your important documents
organized in one secure place.

[Upload Document]
```

## 16.2 No Search Results

If a search produces no results:

```text
🔍

No documents found.

Try a different name or
remove the category filter.

[Clear Search]
```

## 16.3 Empty Trash

If Trash is empty:

```text
🗑️

Trash is empty.

Deleted documents will remain here
for 30 days before permanent deletion.
```

## 16.4 Error State

An actual loading/server/network error must not be presented as an empty collection.

Example:

```text
⚠️ Couldn't load your documents.

Please check your connection
and try again.

[Retry]
```

---

# 17. V1 Feature Scope

## 17.1 V1 — Must Have

* Registration
* Login
* Forgot Password
* Logout
* Dashboard
* Dashboard summary
* Upload one or multiple documents
* PDF/JPG/JPEG/PNG support
* 20 MB per-file limit
* User-defined document name
* Predefined categories
* Private document storage
* My Documents
* Card View
* List View
* View document
* Download document
* Edit name/category
* Search by user-defined name
* Category filtering
* Delete to Trash
* 30-day Trash
* Restore
* Manual permanent deletion
* Automatic permanent deletion after 30 days
* Loading states
* Error handling
* Basic duplicate warning
* Responsive web interface
* User-level authorization and privacy

---

# 18. V2 — Future

The following features are intentionally outside V1:

* Document expiry dates
* Expiry reminders
* Family accounts
* Family-member permissions
* Larger file-size limits
* Additional file formats
* Custom categories
* Improved mobile experience
* More advanced upload recovery
* More advanced dashboard statistics
* Better notifications

---

# 19. V3 — Future / Advanced

Potential V3 features:

* OCR
* Automatic document recognition
* Automatic document naming
* Automatic category suggestions
* Smart/semantic search
* Advanced duplicate detection
* Controlled document sharing
* Advanced notifications
* Offline/PWA capabilities
* More advanced document organization

---

# 20. Explicitly Out of Scope for V1

To prevent scope creep, the following will not be built in V1:

* Native Android application
* Native iOS application
* Payments/subscriptions
* Public API
* Enterprise features
* Complex administration panel
* Social features
* AI chatbot
* Advanced analytics
* Full offline-first functionality

These may be reconsidered in future versions if the project requires them.

---

# 21. V1 Acceptance Criteria

DocuVault V1 is considered functionally complete when the following can be demonstrated.

## Authentication

* [ ] A new user can register with name, email and password.
* [ ] A registered user can log in.
* [ ] A user can log out.
* [ ] A user can reset a forgotten password.
* [ ] Email verification is not required in V1.

## Dashboard

* [ ] Successful login leads to the dashboard.
* [ ] Dashboard provides navigation to the main DocuVault functions.
* [ ] Dashboard displays a useful document summary.

## Upload

* [ ] A user can select one or multiple files.
* [ ] PDF, JPG, JPEG and PNG files can be uploaded.
* [ ] Files larger than 20 MB are rejected with a clear message.
* [ ] Each uploaded file requires a document name.
* [ ] Each uploaded file requires a category.
* [ ] A selected file can be removed before upload.
* [ ] Upload progress is shown.
* [ ] Failed uploads can be retried.
* [ ] Possible duplicates generate a warning rather than automatic rejection.

## Documents

* [ ] Uploaded documents appear in My Documents.
* [ ] Card View works.
* [ ] List View works.
* [ ] The user can switch between views.
* [ ] A document can be viewed without automatically downloading it.
* [ ] A document can be explicitly downloaded.
* [ ] The user can edit its name/category.

## Search

* [ ] Search works using the user's document name.
* [ ] Category filtering works.
* [ ] All categories can be selected.
* [ ] Empty search results display a useful message.
* [ ] Search never exposes unauthorized documents.

## Trash

* [ ] Delete requires confirmation.
* [ ] Deleted documents move to Trash.
* [ ] Documents remain recoverable for 30 days.
* [ ] Documents can be restored.
* [ ] Documents can be permanently deleted manually.
* [ ] Documents are permanently deleted after 30 days.

## Security

* [ ] Each document is associated with its owner.
* [ ] User A cannot view User B's document.
* [ ] User A cannot download User B's document.
* [ ] User A cannot edit User B's document.
* [ ] User A cannot delete or restore User B's document.
* [ ] User A cannot discover User B's document through search.
* [ ] Protected resources require valid authentication and authorization.

## Reliability

* [ ] Loading states are displayed for slow operations.
* [ ] Network failures provide useful feedback.
* [ ] Failed uploads can be retried.
* [ ] Actual errors are distinguishable from empty data states.

## Platform

* [ ] The application works on desktop/laptop browsers.
* [ ] The application works on mobile browsers.
* [ ] The interface is responsive.

---

# 22. Definition of V1 Success

DocuVault V1 should allow a user to complete this complete journey successfully:

```text
Create Account
      ↓
Login
      ↓
Dashboard
      ↓
Upload Document
      ↓
Give Document Name
      ↓
Choose Category
      ↓
Store Privately
      ↓
Find Document
      ↓
View / Download
      ↓
Delete
      ↓
Restore from Trash
```

The most important property of V1 is not the number of features.

It is that the above workflow works **reliably, simply and securely**.

---

# 23. Future Direction

V1 establishes the foundation for more advanced versions.

The planned progression is:

```text
V1
Secure personal document management
        ↓
V2
Expiry tracking + reminders + family features
        ↓
V3
OCR + intelligent organization + advanced search
        ↓
Future
Potential real-world product based on user feedback
```

Features should only be promoted into later versions when there is a genuine user need for them.
