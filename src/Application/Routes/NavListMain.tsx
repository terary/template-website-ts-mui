import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { useApplicationUtilities } from "..";
import { NavLink, useLocation } from "react-router-dom";

type MyNavLinkProps = {
  to: string;
  Icon: typeof DashboardIcon;
  text: string;
};

const homeDir = process.env.NODE_ENV === "production" ? "/gabby-query-protocol-www/" : "/";

const MyNavLink = ({ to, Icon, text }: MyNavLinkProps) => {
  const { pathname } = useLocation();

  const activeRoute = () => {
    return to === pathname;
  };

  return (
    <ListItem selected={activeRoute()} component={NavLink} to={to}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={`${text}`} />
    </ListItem>
  );
};

export const NavListMain = () => {
  const { t } = useApplicationUtilities();
  return (
    <List>
      <MyNavLink to={`${homeDir}`} Icon={DashboardIcon} text={t("Home")} />
      <MyNavLink to={`${homeDir}workbench`} Icon={LayersIcon} text={t("workbench")} />
      <MyNavLink
        to={`${homeDir}gabby-components`}
        Icon={DashboardIcon}
        text={t("Gabby Components")}
      />
      <MyNavLink to={`${homeDir}blank-page`} Icon={PeopleIcon} text={t("Blank Page")} />
      <MyNavLink to={`${homeDir}gabby3`} Icon={ShoppingCartIcon} text={t("Gabby 3")} />

      <ListSubheader inset>{t("Filler Not Used")}</ListSubheader>

      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary={t("Customers")} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary={t("Reports")} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary={t("Integrations")} />
      </ListItem>
    </List>
  );
};
