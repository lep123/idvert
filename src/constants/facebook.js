export default {
  data: [
    {
      id: 0,
      colum: [
        { 
          label: 'Search Position',
          options: [
            {
              key: 'position',
              type: 'Radio',
              disabled: true,
              data: [
                {
                  id: 0,
                  value: 'Page Name',
                  active: false,
                },
                {
                  id: 1,
                  value: 'AD URL',
                  active: false,
                },
                {
                  id: 2,
                  value: 'AD Text',
                  active: false,
                },
                {
                  id: 3,
                  value: 'Money Page Text',
                  active: false,
                },
              ]
            }
          ]
        }
      ] 
    },
    {
      id: 2,
      colum: [
        { 
          label: 'Ads Format',
          options: [
            { 
              key: 'format',
              type: 'CheckBox',
              disabled: false,
              data:[
                {
                  id: 0,
                  value: 'Image',
                  active: false,
                },
                {
                  id: 1,
                  value: 'Video',
                  active: false,
                },
                {
                  id: 2,
                  value: 'Carousel',
                  active: false,
                },
              ]
            }
          ]
        },
        { 
          label: 'Device',
          options: [
            {
              key: 'device',
              type: 'CheckBox',
              disabled: false,
              data:[
                {
                  id: 0,
                  value: 'Desktop',
                  active: false,
                },
                {
                  id: 1,
                  value: 'Android',
                  active: false,
                },
                {
                  id: 2,
                  value: 'IOS',
                  active: false,
                },
              ]
            }
          ]
        }
      ] 
    },
    {
      id: 3,
      colum: [
        { 
          label: 'First Seen Date',
          options: [
            {
              key: 'firstdate',
              type: 'DatePicker',
              disabled: false,
              placeholder: 'First Seen',
            }
          ]
        },
        { 
          label: 'Laset Seen Date',
          options: [
            { 
              key: 'lastdate',
              type: 'DatePicker',
              disabled: false,
              placeholder: 'Laset Seen'
            }
          ]
        }
      ] 
    },
    {
      id: 4,
      colum: [
        { 
          label: 'Preminum Search',
          options: [
            {
              key: 'country',
              type: 'Selects',
              disabled: false,
              multiple: true,
              placeholder: 'country',
              option: [
                {
                  "value": "Casino & Crypto",
                  "key": "Casino & Crypto"
                },
               
              ]
            },
            {
              key: 'bhCategory',
              type: 'Selects',
              disabled: false,
              multiple: true,
              placeholder: 'bhCategory',
              option: [
                {
                  "value": "Casino & Crypto",
                  "key": "Casino & Crypto"
                },
               
              ]
            },
            {
              key: 'adsPlat',
              type: 'Selects',
              disabled: false,
              multiple: true,
              placeholder: 'adsPlat',
              option: [
                {
                  "value": "Casino & Crypto",
                  "key": "Casino & Crypto"
                },
               
              ]
            },
            {
              key: 'action',
              type: 'Selects',
              disabled: false,
              multiple: true,
              placeholder: 'action',
              option: [
                {
                  "value": "Casino & Crypto",
                  "key": "Casino & Crypto"
                },
               
              ]
            },
            {
              key: 'language',
              type: 'Selects',
              disabled: false,
              multiple: true,
              placeholder: 'language',
              option: [
                {
                  "value": "Casino & Crypto",
                  "key": "Casino & Crypto"
                },
               
              ]
            },
            {
              key: 'buildStationSystem',
              type: 'Selects',
              disabled: false,
              multiple: true,
              placeholder: 'buildStationSystem',
              option: [
                {
                  "value": "Casino & Crypto",
                  "key": "Casino & Crypto"
                },
               
              ]
            },
            {
              key: 'network',
              type: 'Selects',
              disabled: false,
              multiple: true,
              placeholder: 'network',
              option: [
                {
                  "value": "Casino & Crypto",
                  "key": "Casino & Crypto"
                },
              ]
            },
          ]
        },
      ] 
    },
   ]
}