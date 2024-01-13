import React from 'react'
import { Icon } from '@iconify/react';

export default function SideNav() {
  return (
    <div>
        <div>
        <Icon icon="mingcute:user-4-fill" width={80} />
        <h3>Username</h3>
        </div>
        <div>
            <p>Menu</p>
            <div>
            <Icon icon="heroicons:home-solid" />
            <p>Home</p>
            </div>
            <div>
            <Icon icon="fluent:save-16-filled" />
            <p>Saved</p>
            </div>
            <div>
            <Icon icon="iconamoon:discover" />
            <p>Discover</p>
            </div>
        </div>
        <div>
            <p>Social</p>
            <div>
            <Icon icon="la:user-friends" />
            <p>Friends</p>
            </div>
            <div>
            <Icon icon="typcn:th-list" />
            <p>Your List</p>
            </div>
        </div>
        <div>
            <p>Category</p>
            <div>
            <Icon icon="bx:movie-play" />
            <p>Movie</p>
            </div>
            <div>
            <Icon icon="fluent-emoji-high-contrast:movie-camera" />
            <p>Series</p>
            </div>
            <div>
            <Icon icon="bx:tv" />
            <p>Tv Shows</p>
            </div>
        </div>
        <div>
            <p>General</p>
            <div>
            <Icon icon="ant-design:setting-twotone" />
            <p>Setting</p>
            </div>
            <div>
            <Icon icon="tabler:logout" />
            <p>Log Out</p>
            </div>
        </div>
    </div>
  )
}
