import { Box, Flex, Image } from "@pancakeswap/uikit";
import config from "../config";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();
  const links = config(t);
  return (
    <Box >
      
    </Box>
  );
};
