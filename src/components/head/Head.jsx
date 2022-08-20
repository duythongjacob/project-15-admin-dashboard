import React from "react"
import SettingsIcon from "@mui/icons-material/Settings"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"

const Head = ({ dark, setMode }) => {
    const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png'
    return (
        <>
            
            <section className='head'>
                <div className='container flexSB'>
                    <div className='left'>
                        <div className='link'>
                            <img src={logo} alt='' />
                        </div>
                    </div>
                    <div className='right flexCenter'>
                        <div className='search flexCenter'>
                            <input type='text' placeholder='Search...' />
                            <SearchOutlinedIcon className='iconHead' />
                        </div>
                        <NotificationsNoneOutlinedIcon className='iconHead' />
                        <div className='profile flexCenter'>
                            <img className='imageCircle' src='https://i.pinimg.com/originals/62/82/64/62826428b3e2674afc856d2b6bd48b8b.png' alt='' />
                            <span>D.Thong</span>
                            <KeyboardArrowDownOutlinedIcon className='iconHead' />
                        </div>
                        <button onClick={() => setMode(!dark)}>
                            <SettingsIcon className='iconHead' />
                        </button>
                        {/*<button onClick={toggleStyle}>
              <SettingsIcon className='iconHead' />
              {btn}
            </button>*/}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head