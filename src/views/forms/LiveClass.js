import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem, CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormInput, CFormSelect, CImage, CInputGroup, CListGroup, CListGroupItem, CPopover, CRow, CSpinner } from '@coreui/react'
import React, { useState } from 'react'
import Profile from 'src/assets/images/avatars/img_avatar.png'

const LiveClass = () => {
    const [liveClass, setLiveClass] = useState(false)

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']




    return (
        <CCard>
            <CCardHeader>
                <CCardTitle>Live Classes</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm>
                    <CRow>
                        <CCol xs={9}>
                            {liveClass && (
                                <CCard>
                                    <CCardBody>
                                        <CRow>
                                            <CCol>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Trainer"
                                                    label="Trainer"
                                                    options={[
                                                        "Select Trainer",
                                                        { label: "sejal", value: "1" },
                                                        { label: "prabha", value: "2" },
                                                        { label: "Three", value: "3" },
                                                    ]}
                                                />
                                            </CCol>
                                            <CCol>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Service"
                                                    label="Service"
                                                    options={[
                                                        "Select Service",
                                                        { label: "One", value: "1" },
                                                        { label: "Two", value: "2" },
                                                        { label: "Three", value: "3" },
                                                    ]}
                                                />
                                            </CCol>
                                            
                                            <CCol>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Batch"
                                                    label="Batch"
                                                    options={[
                                                        "Select Batch",
                                                        { label: "One", value: "1" },
                                                        { label: "Two", value: "2" },
                                                        { label: "Three", value: "3" },
                                                    ]}
                                                />
                                            </CCol>
                                            <CCol className='mt-4'>
                                                <CButton onClick={() => setLiveClass(false)}>
                                                    Save
                                                </CButton>
                                                <CButton className='ms-2' onClick={() => setLiveClass(false)}>
                                                    Cancel
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                    </CCardBody>
                                </CCard>
                            )}
                        </CCol>
                        <CCol xs={3}>
                            <CButton className="mt-2 float-end me-3 " onClick={() => setLiveClass(!liveClass)} >{!liveClass ? 'Add Live Classes' : 'Close'}</CButton>
                        </CCol>
                    </CRow>
                </CForm>



               

              

                <CCard className='mt-3'>
                    <CCardHeader>
                        Past Live Class Update
                    </CCardHeader>
                    <CCardBody>
                        <CForm>

                            <CCard>
                                <CCardBody>
                                    <CRow>
                                        <CCol>
                                            <CInputGroup style={{ height: "38px" }}>
                                                <CFormSelect
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon"
                                                >
                                                    <option>Trainer Name</option>
                                                    <option value="1">Service</option>
                                                </CFormSelect>
                                                <CFormInput
                                                    placeholder="Search"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="button-addon2"
                                                />
                                                <CFormInput
                                                    type='date'
                                                    placeholder="Search"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="button-addon2"
                                                />
                                                <CFormInput
                                                    type='time'
                                                    placeholder="Search"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="button-addon2"
                                                />
                                                <CButton type="button" color="primary">
                                                    Search
                                                </CButton>
                                            </CInputGroup>
                                        </CCol>
                                    </CRow>
                                </CCardBody>
                            </CCard>
                        </CForm>
                        <CRow>
                            <CCol lg={12} sm={12} className='mt-1'>
                                <CAccordion activeItemKey={2}>
                                    <CAccordionItem itemKey={1}>
                                        <CAccordionHeader>
                                            <CRow>
                                                <CCol xs={4}>
                                                    <label style={{ fontWeight: 'bold' }}>Trainer Name : Prabha Yadav</label>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span style={{ fontWeight: 'bold' }}>Service : Yoga</span>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span style={{ fontWeight: 'bold' }}>Batch Timing: 12 AM</span>
                                                </CCol>
                                                <CCol xs={2}>
                                                    <span>
                                                        <CButton color="success">
                                                            Complated
                                                        </CButton>
                                                    </span>
                                                </CCol>
                                                <CCol xs={4}>
                                                    <label>Date: 30/09/2022</label>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span>Registered User : 45</span>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span>Duration: 30 min</span>
                                                </CCol>
                                            </CRow>
                                        </CAccordionHeader>
                                        <CAccordionBody>
                                            <CListGroup>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>Sr. No</CCol>
                                                        <CCol>Date</CCol>
                                                        <CCol>Attendance ID</CCol>
                                                        <CCol>Client Name</CCol>
                                                        <CCol>Joining time</CCol>
                                                        <CCol>Attendance</CCol>
                                                        <CCol>Details</CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>1</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>2</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>3</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CAccordionBody>
                                    </CAccordionItem>
                                </CAccordion>
                            </CCol>
                            <CCol lg={12} sm={12} className='mt-1'>
                                <CAccordion activeItemKey={2}>
                                    <CAccordionItem itemKey={1}>
                                        <CAccordionHeader>
                                            <CRow>
                                                <CCol xs={4}>
                                                    <label style={{ fontWeight: 'bold' }}>Trainer Name : Prabha Yadav</label>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span style={{ fontWeight: 'bold' }}>Service : Yoga</span>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span style={{ fontWeight: 'bold' }}>Batch Timing: 12 AM</span>
                                                </CCol>
                                                <CCol xs={2}>
                                                    <span>
                                                        <CButton color="success">
                                                            Complated
                                                        </CButton>
                                                    </span>
                                                </CCol>
                                                <CCol xs={4}>
                                                    <label>Date: 30/09/2022</label>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span>Registered User : 45</span>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span>Duration: 30 min</span>
                                                </CCol>
                                            </CRow>
                                        </CAccordionHeader>
                                        <CAccordionBody>
                                            <CListGroup>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>Sr. No</CCol>
                                                        <CCol>Date</CCol>
                                                        <CCol>Attendance ID</CCol>
                                                        <CCol>Client Name</CCol>
                                                        <CCol>Joining time</CCol>
                                                        <CCol>Attendance</CCol>
                                                        <CCol>Details</CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>1</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>2</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>3</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CAccordionBody>
                                    </CAccordionItem>
                                </CAccordion>
                            </CCol>
                            <CCol lg={12} sm={12} className='mt-1'>
                                <CAccordion activeItemKey={2}>
                                    <CAccordionItem itemKey={1}>
                                        <CAccordionHeader>
                                            <CRow>
                                                <CCol xs={4}>
                                                    <label style={{ fontWeight: 'bold' }}>Trainer Name : Prabha Yadav</label>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span style={{ fontWeight: 'bold' }}>Service : Yoga</span>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span style={{ fontWeight: 'bold' }}>Batch Timing: 12 AM</span>
                                                </CCol>
                                                <CCol xs={2}>
                                                    <span>
                                                        <CPopover
                                                            title="Reason"
                                                            content="Trainer Not Well!"
                                                            placement="left"
                                                        >
                                                            <CButton color="warning">
                                                                Cancelled
                                                            </CButton>
                                                        </CPopover>
                                                    </span>
                                                </CCol>
                                                <CCol xs={4}>
                                                    <label>Date: 30/09/2022</label>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span>Registered User : 45</span>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span>Duration: 30 min</span>
                                                </CCol>
                                            </CRow>
                                        </CAccordionHeader>
                                        <CAccordionBody>
                                            <CListGroup>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>Sr. No</CCol>
                                                        <CCol>Date</CCol>
                                                        <CCol>Attendance ID</CCol>
                                                        <CCol>Client Name</CCol>
                                                        <CCol>Joining time</CCol>
                                                        <CCol>Attendance</CCol>
                                                        <CCol>Details</CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>1</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>2</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>3</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CAccordionBody>
                                    </CAccordionItem>
                                </CAccordion>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCardBody>
        </CCard>
    )
}

export default LiveClass
