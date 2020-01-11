### Filter

```javascript
function handelClick (record) {

}

     const option = [
      {
        "value": "Casino & Crypto",
        "key": "Casino & Crypto"
      },
      {
        "value": "Diet",
        "key": "Diet"
      },
      {
        "value": "Sweepstakes",
        "key": "Sweepstakes"
      },
      {
        "value": "ED/Muscle",
        "key": "ED/Muscle"
      },
      {
        "value": "Skin",
        "key": "Skin"
      },
      {
        "value": "Other",
        "key": "Other"
      }
    ]

    const data = [
      {
        id: 0,
        value: 'Search Position',
        active: true
      },
      {
        id:1,
        value:'AD URL',
        active: false
      }
    ]

<Collection 
  iconNo={<Icon type="star" theme="filled" />}
  iconOff={<Icon type="star"  />}
  iconstatus = {true}
  handelClick = {function}
/>

```