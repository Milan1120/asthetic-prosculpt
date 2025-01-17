import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;
  background-color:#ccfeac ; /* Darker green background for the header */

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  font-weight: bold; /* Make text bold */
  color: white; /* Text color for normal state */
  background-color: green; /* Default background color */
  margin: 0 1.5rem; /* Equal horizontal spacing */
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 10px; /* Apply 10px border-radius for rounded corners */

  &:hover {
    color: white; /* Ensure text remains white on hover */
    background-color: black; /* Background color turns black on hover */
    text-decoration: none; /* Remove underline on hover */
  }

  @media only screen and (max-width: 768px) {
    margin: 1rem 0; /* Adjust spacing for smaller screens */
    display: inline-block; /* Keep items inline on smaller screens */
  }
`;

export const ContactButton = styled("div")`
  font-size: 1.2rem;
  font-weight: bold; /* Make text bold */
  color: white; /* White text for better contrast */
  background-color: green; /* Default green background */
  padding: 0.5rem 1.5rem;
  border-radius: 10px; /* Apply 10px border-radius for rounded corners */
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: black; /* Change background to black on hover */
    color: white; /* Ensure text remains white */
    text-decoration: none; /* Remove underline on hover */
  }

  @media only screen and (max-width: 768px) {
    margin: 1rem 0; /* Adjust spacing for smaller screens */
    display: inline-block; /* Keep items inline on smaller screens */
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }
  display: none;

  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const Label = styled("span")`
  font-weight: bold;
  color: white; /* Change label text to white */
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: white; /* Text color remains white on hover */
    text-decoration: none; /* Remove underline on hover */
  }
`;
