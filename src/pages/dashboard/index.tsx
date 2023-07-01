import { Fragment } from "react"
import './dashboard.css'
import { Paper } from "../../components/commons/Dashboard/Paper/Paper"
import Accordion from "../../components/reusables/Accordion/Accordion"
// import { UserTable } from "../../components/features/Users/parts/UserTable"
import { CustomTable } from "../../components/reusables/CustomTable/CustomTable"

const overviewData = [
  {
    id: 1,
    label: 'Products',
    caption: '',
    totalCount: 123,
  },
  {
    id: 2,
    label: 'Categories',
    caption: '',
    totalCount: 321,
  },
  {
    id: 3,
    label: 'Orders',
    caption: '',
    totalCount: 435,
  },
  {
    id: 4,
    label: 'Users',
    caption: '',
    totalCount: 534568,
  },
  {
    id: 5,
    label: 'Transactions',
    caption: '',
    totalCount: 50000,
  },
  {
    id: 6,
    label: 'Payment failed',
    caption: '',
    totalCount: 23,
  },
]
const colData = [
  {
    key: 1,
    title: 'id'
  },
  {
    key: 2,
    title: 'label'
  },
  {
    key: 3,
    title: 'caption'
  },
  {
    key: 4,
    title: 'totalCount'
  },
  {
    key: 5,
    title: 'action'
  }
];

export const Dashboard = () => {
  return (
    <div className="main-page">
      <Accordion title="Overview">
        {
          overviewData.map((over, index) => {
            return (
              <Fragment key={index}>
                <Paper label={over.label} caption={over.caption} content={over.totalCount} index={index+1} />
              </Fragment>
            )
          })
        }    
      </Accordion>
      <div className="accordion-section-row">
        <div className="accordion-section-col1">
          <Accordion title="Section 1">
            <CustomTable data={overviewData} columns={colData} classNames={'test'}  />
          </Accordion>
        </div>
        <div className="accordion-section-col2">
          <Accordion title="Section 1">
            <CustomTable data={overviewData} columns={colData} classNames={'test'}  />
          </Accordion>
        </div>
      </div>
      <Accordion title="Section 2">
        <CustomTable data={overviewData} columns={colData} classNames={'test'}  />
      </Accordion>
      
    </div>
  )
}
