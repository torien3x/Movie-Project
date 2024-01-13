import React from 'react'
import { Icon } from '@iconify/react';
import "./SideNav.css" 

export default function SideNav() {
  return (
    <div className='container'>
        <div className='user-profil'>
        <Icon icon="mingcute:user-4-fill" width={80} />
        <h3>Username</h3>
        </div>
        <div className='top-option'>
            <p >Menu</p>
            <div className='top-option-links'>
            <Icon icon="heroicons:home-solid" height={20} />
            <p>Home</p>
            </div>
            <div className='top-option-links'>
            <Icon icon="fluent:save-16-filled" height={20} />
            <p>Saved</p>
            </div>
            <div className='top-option-links'>
            <Icon icon="iconamoon:discover" height={20} />
            <p>Discover</p>
            </div>
        </div>
        <div className='mid-option'>
            <p>Social</p>
            <div className='mid-option-links'>
            <Icon icon="la:user-friends" height={20} />
            <p>Friends</p>
            </div>
            <div className='mid-option-links'>
            <Icon icon="typcn:th-list" height={20} />
            <p>Your List</p>
            </div>
        </div>
        <div className='bottom-option'>
            <p>Category</p>
            <div className='bottom-option-links'>
            <Icon icon="bx:movie-play" height={20} />
            <p>Movie</p>
            </div>
            <div className='bottom-option-links'>
            <Icon icon="fluent-emoji-high-contrast:movie-camera" height={20} />
            <p>Series</p>
            </div>
            <div className='bottom-option-links'>
            <Icon icon="bx:tv" height={20} />
            <p>Tv Shows</p>
            </div>
        </div>
        <div className='setting'>
            <p>General</p>
            <div className='setting-links'>
            <Icon icon="ant-design:setting-twotone" height={20} />
            <p>Setting</p>
            </div>
            <div className='setting-links'>
            <Icon icon="tabler:logout" height={20} />
            <p>Log Out</p>
            </div>
        </div>
    </div>
  )
}
