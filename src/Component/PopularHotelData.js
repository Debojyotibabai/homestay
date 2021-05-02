// icon
import StarIcon from "@material-ui/icons/Star";

const style = {
  color: "#ff8e93",
  fontSize: "small",
};

export const PopularHotelData = [
  {
    img:
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "Landmark",
    location: "New York, USA",
    landmark: "2 km from city",
    star: (
      <>
        <StarIcon style={style} />
        <StarIcon style={style} />
        <StarIcon style={style} />
        <StarIcon style={style} />
      </>
    ),
    price: "1100",
    shift: "/ per night",
  },
  {
    img:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "Fortune",
    location: "Australia",
    landmark: "1.5 km from city",
    star: (
      <>
        <StarIcon style={style} />
        <StarIcon style={style} />
        <StarIcon style={style} />
      </>
    ),
    price: "1000",
    shift: "/ per night",
  },
  {
    img:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "Skyheight",
    location: "Thane, India",
    landmark: "3 km from city",
    star: (
      <>
        <StarIcon style={style} />
        <StarIcon style={style} />
        <StarIcon style={style} />
        <StarIcon style={style} />
        <StarIcon style={style} />
      </>
    ),
    price: "500",
    shift: "/ per night",
  },
  {
    img:
      "https://images.unsplash.com/photo-1576675762919-b2197ab5d6bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Elite",
    location: "Italy",
    landmark: "1 km from city",
    star: (
      <>
        <StarIcon style={style} />
        <StarIcon style={style} />
        <StarIcon style={style} />
        <StarIcon style={style} />
      </>
    ),
    price: "1200",
    shift: "/ per night",
  },
];
