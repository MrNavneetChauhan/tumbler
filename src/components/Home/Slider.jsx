import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

const SliderData = [
  {
    itemName: "Disney® - Princess Group Hug",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1405075)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/PK3&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 18.99,
    itemOption: "Options Available",
    itemOptionType: "Wrap With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/BL-Disney?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This printed wrap-around design is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1405075)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/PK3&show&obj=MAIN&req=object&sharpen=1)$PDP-ALT-THMB$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1405075?$PDP-ALT-THMB$",
  },
  {
    itemName: "Mandalorian - Grogu",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/EMB&decal&src=is(tervis/16DWT-V2-EMB-DECO3?&$img-src=1402587)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BK2&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 21.99,
    itemOption: "Options Available",
    itemOptionType: "Emblem With Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/BL-StarWars?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This embroidered patch is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/EMB&decal&src=is(tervis/16DWT-V2-EMB-DECO3?&$img-src=1402587)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BK2&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1402587?$PDP-ALT-THMB$",
  },
  {
    itemName: "Loving Plaid",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1404259)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/PU7&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 16.99,
    itemOption: "Options Available",
    itemOptionType: "Wrap With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/BL-Disney?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This printed wrap-around design is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1404259)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/PU7&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1404259?$PDP-ALT-THMB$",
  },
  {
    itemName: "Only Good Vibes",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1402678)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/PK3&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 19.99,
    itemOption: "Options Available",
    itemOptionType: "Wrap With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/BL-StarWars?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This printed wrap-around design is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1402678)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/PK3&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1402678?$PDP-ALT-THMB$",
  },
  {
    itemName: "Kelly Ventura - Heather Rose",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1405171)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/PU17&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 17.99,
    itemOption: "Options Available",
    itemOptionType: "Wrap With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/bl-kelly-ventura?$PDP-BL$",
    itemOffer: "Buy Any 3, Get $10 Off Free Shipping on $40+",
    itemDescription:
      "This printed wrap-around design is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1405171)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/PU17&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1405171?$PDP-ALT-THMB$",
  },
  {
    itemName: "Salt Life® - Lobster Dive",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1403957)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BK2&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 18.99,
    itemOption: "Options Available",
    itemOptionType: "Wrap With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/BL-SaltLife?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This printed wrap-around design is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1403957)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BK2&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1403957?$PDP-ALT-THMB$",
  },
  {
    itemName: "Disney®/Pixar - Ratatouille",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/EMB&decal&src=is(tervis/16DWT-V2-EMB-DECO3?&$img-src=1406338)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BK2&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 20.99,
    itemOption: "Options Available",
    itemOptionType: "Emblem With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/BL-Disney?$PDP-BL$",
    itemOffer: "Buy Any 3, Get $10 Off Free Shipping on $40+",
    itemDescription:
      "This embroidered patch is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/EMB&decal&src=is(tervis/16DWT-V2-EMB-DECO3?&$img-src=1406338)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BK2&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1406338?$PDP-ALT-THMB$",
  },
  {
    itemName: "Disney® - Mickey Through the Years",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1406942)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/RD1&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 21.99,
    itemOption: "Options Available",
    itemOptionType: "Wrap With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/BL-Disney?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This printed wrap-around design is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1406942)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/RD1&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1406942?$PDP-ALT-THMB$",
  },
  {
    itemName: "Star Wars™ - R2D2 Icon",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/EMB&decal&src=is(tervis/16DWT-V2-EMB-DECO3?&$img-src=1405338)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BL2&show&obj=MAIN&req=object&sharpen=1)$PDP-ALT-THMB$",
    itemPrice: 22.99,
    itemOption: "Options Available",
    itemOptionType: "Emblem With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/BL-StarWars?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This embroidered patch is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/EMB&decal&src=is(tervis/16DWT-V2-EMB-DECO3?&$img-src=1405338)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BL2&show&obj=MAIN&req=object&sharpen=1)$PDP-ALT-THMB$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1405338?$PDP-ALT-THMB$",
  },
  {
    itemName: "Callie Danielle - Beach Biking",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/24DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/24DWT-V2-WRA-DECO3?&$img-src=1390613)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/PK2&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 21.99,
    itemOption: "Options Available",
    itemOptionType: "Wrap With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/bl-kelly-ventura?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This printed wrap-around design is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/24DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/24DWT-V2-WRA-DECO3?&$img-src=1390613)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/PK2&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1390613?$PDP-ALT-THMB$",
  },
  {
    itemName: "Sara Berrenson - Home Sweet Home",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1405955)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BL3&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 16.99,
    itemOption: "Options Available",
    itemOptionType: "Wrap With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/bl-sara-berrenson?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This printed wrap-around design is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1405955)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BL3&show&obj=MAIN&req=object&sharpen=1)$PDP-ALT-THMB$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1405955?$PDP-ALT-THMB$",
  },
  {
    itemName: "Sunflower Flyby",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/EMB&decal&src=is(tervis/16DWT-V2-EMB-DECO3?&$img-src=1406265)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/YE1&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 19.99,
    itemOption: "Options Available",
    itemOptionType: "Emblem With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/bl-sara-berrenson?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This embroidered patch is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/EMB&decal&src=is(tervis/16DWT-V2-EMB-DECO3?&$img-src=1406265)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/YE1&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1406265?$PDP-ALT-THMB$",
  },
  {
    itemName: "Sara Berrenson - Scoops and Pops",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1405200)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/PK2&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 16.99,
    itemOption: "Options Available",
    itemOptionType: "Emblem With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/bl-sara-berrenson?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This printed wrap-around design is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1405200)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/PK2&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1405200?$PDP-ALT-THMB$",
  },
  {
    itemName: "EttaVee You Can",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1403307)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BL10&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 18.99,
    itemOption: "Options Available",
    itemOptionType: "Emblem With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/bl-etta-vee?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This printed wrap-around design is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1403307)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BL10&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1403307?$PDP-ALT-THMB$",
  },
  {
    itemName: "Inkreel - Island Hopping",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1403469)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BL28&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 17.99,
    itemOption: "Options Available",
    itemOptionType: "Emblem With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/bl-inkreel?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This printed wrap-around design is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1403469)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BL28&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1403469?$PDP-ALT-THMB$",
  },
  {
    itemName: "Warner Brothers - Tweety 80th Anniversary",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1405016)&pos=20%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/YE1&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 18.99,
    itemOption: "Options Available",
    itemOptionType: "Wrap With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/BL-WarnerBros?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This printed wrap-around design is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1405016)&pos=20%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/YE1&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1405016?$PDP-ALT-THMB$",
  },
  {
    itemName: "Simply Southern® - Havin' a Good Day",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1408323)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/OR2&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 21.99,
    itemOption: "Options Available",
    itemOptionType: "Wrap With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/BL-SimplySouthern?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This printed wrap-around design is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1408323)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/OR2&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1408323?$PDP-ALT-THMB$",
  },
  {
    itemName: "EttaVee Be Spot On",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1403815)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BL28&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 16.99,
    itemOption: "Options Available",
    itemOptionType: "Wrap With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/bl-etta-vee?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This printed wrap-around design is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1403815)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BL28&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1403815?$PDP-ALT-THMB$",
  },
  {
    itemName: "Simply Southern® - Cheer Up Buttercup",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1407932)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/PK2&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 18.99,
    itemOption: "Options Available",
    itemOptionType: "Wrap With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/BL-SimplySouthern?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This printed wrap-around design is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1407932)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/PK2&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1407932?$PDP-ALT-THMB$",
  },
  {
    itemName: "Disney® - Up House",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/EMB&decal&src=is(tervis/16DWT-V2-EMB-DECO3?&$img-src=1403481)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BL10&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 17.99,
    itemOption: "Options Available",
    itemOptionType: "Emblem With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/BL-Disney?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This embroidered patch is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/EMB&decal&src=is(tervis/16DWT-V2-EMB-DECO3?&$img-src=1403481)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/BL10&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1403481?$PDP-ALT-THMB$",
  },
  {
    itemName: "Simply Southern® - Cheer Up Buttercup",
    itemImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1407932)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/PK2&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemPrice: 18.99,
    itemOption: "Options Available",
    itemOptionType: "Wrap With Travel Lid",
    itemBrandImg:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/BL-SimplySouthern?$PDP-BL$",
    itemOffer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    itemDescription:
      "This printed wrap-around design is sealed between the tumbler walls. Tervis tumblers feature double-wall insulated construction that keeps drinks hot or cold longer and reduces condensation to prevent rings on your table. Strong, impact resistant BPA-free material means these tumblers can take a tumble without shattering and won't retain tastes or odors. Tumbler also comes with an easy-to-clean BPA-free travel lid. Most tumblers are microwave, freezer and dishwasher safe for no-worry convenience and fit most cup holders. Each classic tumbler is proudly made in America and backed by a Lifetime Guarantee so you can buy with confidence.",
    itemImgOne:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis?layer=0&src=ir(tervisRender/16DWT1-V2?&obj=MAIN/GLARE&show&obj=MAIN/OUTER/SMOOTH/CL1&show&obj=MAIN/INNER/LINED/CL1&show&obj=MAIN/WRA&decal&src=is(tervis/16DWT-V2-WRA-DECO3?&$img-src=1407932)&pos=0%2C0&show&obj=MAIN/ACCESSORIES/LIDTRV/PK2&show&obj=MAIN&req=object&sharpen=1)$PDP-LG$",
    itemImgTwo:
      "https://marvel-b1-cdn.bc0a.com/f00000000077703/images.tervis.com/is/image/tervis/1407932?$PDP-ALT-THMB$",
  },
];

export default class Sliders extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,

      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="Slider-crousel">
        <Slider {...settings}>
          {SliderData.map((SliderData, i) => (
            <div
              id="Slider-crousel-item"
              key={i}
              active={i === 0}
              className={"carousel item" + this.props.active ? " active" : ""}
              data-interval="2000"
            >
              <div className="new-div">New</div>
              <div className="Slider-crousel-shop-now">
                <button>Shop Now</button>
              </div>
              <img
                style={{
                  width: "100%",
                  margin: "2% 2%",
                  borderRadius: "5px",
                  border: "1px solid #e6e6e6",
                  marginLeft: "5%",
                  height: "auto",
                  boxShadow: "2px 0px 10px #d3c9c9",
                }}
                src={SliderData.itemImg}
                className="d-block w-90"
                alt={SliderData.title}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{SliderData.itemName}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
