// utils.js
export function setapiid() {
    const price_veg = [];
    for (let i = 13001; i <= 13092; i++) {
      price_veg.push(`p${i}`);
    }
  
    const price_fruit = [];
    for (let i = 14001; i <= 14046; i++) {
      price_fruit.push(`p${i}`);
    }
    for (let i = 14001; i <= 14036; i++) {
      price_fruit.push(`w${i}`);
    }
  
    const price_nut = [];
    for (let i = 16001; i <= 16028; i++) {
      price_nut.push(`p${i}`);
    }
    for (let i = 18001; i <= 18106; i++) {
      price_nut.push(`w${i}`);
    }
  
    const price_rice = [];
    for (let i = 11001; i <= 11059; i++) {
      price_rice.push(`r${i}`);
    }
    for (let i = 12001; i <= 12010; i++) {
      price_rice.push(`r${i}`);
    }
  
    const price_raw = [];
    for (let i = 11001; i <= 11062; i++) {
      price_raw.push(`w${i}`);
    }
  
    const price_sea = [];
    for (let i = 12001; i <= 12021; i++) {
      price_sea.push(`w${i}`);
    }
  
    const price_garlic = [];
    for (let i = 15001; i <= 15050; i++) {
      price_garlic.push(`w${i}`);
    }
  
    const price_transfer = [];
    for (let i = 16001; i <= 16044; i++) {
      price_transfer.push(`w${i}`);
    }
    for (let i = 17001; i <= 17015; i++) {
      price_transfer.push(`w${i}`);
    }
  
    return {
      price_veg,
      price_fruit,
      price_nut,
      price_rice,
      price_raw,
      price_sea,
      price_garlic,
      price_transfer,
    };
  }
  