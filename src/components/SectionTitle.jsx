import React from 'react'

const SectionTitle = ({title, description}) => {
  return (
    <div>
       <div className="px-4 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">{title}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="mb-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionTitle
