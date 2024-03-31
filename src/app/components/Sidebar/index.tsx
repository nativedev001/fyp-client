import Link from 'next/link'
import React from 'react'
import style from './style.module.scss';

const Sidebar = () => {
  return (
    <div className={`${style.sidebar}`}>
    <div className='py-2 px-2'>
        <h3 className='fs-5'>Filters</h3>
        <hr className='py-0 my-0' />
    </div>
    <div className='py-3 px-2'>
        <h3 className='fs-5 '>Categories</h3>
        <p className='sidebar_link'>All Categories</p>
        <nav className='sidebar_category'>
            <ul>
                <Link className='sidebar_link' href="">Dogs (500)</Link>
            </ul>
            <ul>
                <Link className='sidebar_link' href="">Parrotes (500)</Link>
            </ul>
            <ul>
                <Link className='sidebar_link' href="">Cats (500)</Link>
            </ul>
            <ul>
                <Link className='sidebar_link' href="">Hens (500)</Link>
            </ul>
            <ul>
                <Link className='sidebar_link' href="">Lion & Cubs (500)</Link>
            </ul>
        </nav>

    </div>
    <hr className='py-0 my-0' />
    <div className='py-3 px-2 my-2 '>
        <h3 className='fs-5 '>Breed</h3>
        <form className='px-1'>
            <div className='py-2'>
                <input id='pair-checkbox' className='py-3 px-3' type='checkbox' />
                <label className='sidebar_link' htmlFor="pair-checkbox">Labra (200)</label>
            </div>
            <div className='py-2'>
                <input id='pair-checkbox' className='py-3 px-3' type='checkbox' />
                <label className='sidebar_link' htmlFor="pair-checkbox">Bull Dog (300)</label>
            </div>
            <div className='py-2'>
                <input id='pair-checkbox' className='py-3 px-3' type='checkbox' />
                <label className='sidebar_link' htmlFor="pair-checkbox">Germen Shepred (400)</label>
            </div>

        </form>

    </div>

    {/* <div className='py-2 px-2'>
        <h3 className='fs-5'>Location</h3>
        <select className='pe-5 py-2 px-2 w-100'>
            <option>Pakistan</option>
            <option>
                Use Current Location
            </option>
            <option>Punjab</option>
            <option>Sindh</option>
            <option>KPK</option>
            <option>Kashmir</option>
            <option>Balochistan</option>
            <option>Nothren Areas</option>
        </select>

        <div className='mt-2'>
            <p className='fw-bold'>Pakistan</p>
            <nav className='sidebar_category'>
                <ul>
                    <Link className='sidebar_link' href="">Punjab (500)</Link>
                </ul>
                <ul>
                    <Link className='sidebar_link' href="">Sindh (500)</Link>
                </ul>
                <ul>
                    <Link className='sidebar_link' href="">KPK (500)</Link>
                </ul>
                <ul>
                    <Link className='sidebar_link' href="">Balochistan (500)</Link>
                </ul>
                <ul>
                    <Link className='sidebar_link' href="">Nothren Areas (500)</Link>
                </ul>
            </nav>
        </div>

    </div> */}
    <hr className='py-0 my-0' />
    <div className='py-2 px-2 my-2'>
        <h3 className='fs-5'>Sex</h3>
        <form className='px-1'>
            <div className='py-2'>
                <input id='pair-checkbox' className='py-3 px-3' type='checkbox' />
                <label className='sidebar_link' htmlFor="pair-checkbox">Pair (200)</label>
            </div>
            <div className='py-2'>
                <input id='pair-checkbox' className='py-3 px-3' type='checkbox' />
                <label className='sidebar_link' htmlFor="pair-checkbox">Male (300)</label>
            </div>
            <div className='py-2'>
                <input id='pair-checkbox' className='py-3 px-3' type='checkbox' />
                <label className='sidebar_link' htmlFor="pair-checkbox">Female (400)</label>
            </div>

        </form>
    </div>
    <hr className='py-0 my-0' />
    <div className='py-2 px-2 my-2'>
        <h3 className='fs-5'>Age</h3>
        <select className='w-100 py-2 px-2'>
            <option>Baby</option>
            <option>Young</option>
            <option>Adult</option>
        </select>
    </div>
    <hr className='py-0 my-0' />
    <div className='py-2 px-2 my-2'>
        <h3 className='fs-5'>Vaccinated</h3>
        <select className='w-100 py-2 px-2'>
            <option>Yes</option>
            <option>No</option>

        </select>
    </div>
    <hr className='py-0 my-0' />
    <div className='py-2 px-2 my-2'>
        <h3 className='fs-5'>Price</h3>
        {/* <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
        /> */}
        <div className="price-filter">

            <div className='d-flex flex-column align-items-start'>
                <input type="text" id="min-price" className="w-75 price-input" readOnly />
                <span className='ms-3'>100 pkr</span>
            </div>

            <div className='d-flex flex-column align-items-start'>
                <input type="text" id="min-price" className="w-75 price-input" readOnly />
                <span className='ms-3'>15 Lac</span>
            </div>
        </div>
    </div>

    <div className='d-flex justify-content-center align-items-center'>
        <button className='btn btn-dark col-6'>Filter</button>
    </div>

</div>
  )
}

export default Sidebar