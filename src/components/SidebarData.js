import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'


export const SidebarData = [
    {
        title : 'Overview',
        path : '/overview',
        icon : <AiIcons.AiFillHome />,
        iconClosed : <RiIcons.RiArrowDownSFill />,
        iconOpened : <RiIcons.RiArrowUpSFill />,
        subNav : [
            {
                title : 'Users',
                path : '/overview/users',
                icon : <IoIcons.IoIosPaper />  
            },
            {
                title : 'Revenue',
                path : '/overview/revenue',
                icon : <IoIcons.IoIosPaper /> 
            }
        ]
        
    },
    {
        title : 'Reports',
        path : '/reports',
        icon : <AiIcons.AiFillHome />,
        iconClosed : <RiIcons.RiArrowDownSFill />,
        iconOpened : <RiIcons.RiArrowUpSFill />,
        subNav : [
            {
                title : 'Report',
                path : '/reports/report1',
                icon : <IoIcons.IoIosPaper />  
            },
            {
                title : 'Report2',
                path : '/reports/report2',
                icon : <IoIcons.IoIosPaper />  
            },
            {
                title : 'Report3',
                path : '/reports/report3',
                icon : <IoIcons.IoIosPaper />   
            }
        ]
    },
    {
        title : 'Products',
        path : '/products',
        icon : <FaIcons.FaCartPlus />
    },
    {
        title : 'Team',
        path : '/team',
        icon : <IoIcons.IoMdPeople />
    },
    {
        title : 'Messages',
        path : '/messages',
        icon : <FaIcons.FaEnvelopeOpenText />,

        iconClosed : <RiIcons.RiArrowDownSFill />,
        iconOpened : <RiIcons.RiArrowUpSFill />,
        subNav : [
            {
                title : 'Message1',
                path : '/messages/message1',
                icon : <IoIcons.IoIosPaper />  
            },
            {
                title : 'Message2',
                path : '/messages/message2',
                icon : <IoIcons.IoIosPaper />  
            },
            {
                title : 'Message3',
                path : '/messages/message3',
                icon : <IoIcons.IoIosPaper />   
            }
        ]
    },
    {
        title : 'Support',
        path : '/support',
        icon : <IoIcons.IoMdHelpCircle />
    }
    
]