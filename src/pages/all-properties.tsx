import { PropertyCard, CustomButton } from "components";
import { Add } from "@mui/icons-material";
//import { useTable } from "@refinedev/core";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const AllProperties = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between"
        alignItems="center">
        <Typography fontSize={25} fontWeight={700}
          color="#11142d">All Properties
        </Typography>
        <CustomButton
          title="AddProperty"
          handleClick={() => navigate('/properties/create')}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>
    </Box>
  )
}

export default AllProperties
