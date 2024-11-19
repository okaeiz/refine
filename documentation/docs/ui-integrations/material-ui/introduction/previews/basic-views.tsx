import React from "react";
import { Sandpack } from "@site/src/components/sandpack";

export default function BasicViews() {
  return (
    <Sandpack
      showNavigator
      initialPercentage={40}
      dependencies={{
        "@refinedev/mui": "5.0.0",
        "@refinedev/core": "latest",
        "@refinedev/simple-rest": "latest",
        "@refinedev/react-router-v6": "latest",
        "@refinedev/react-hook-form": "^4.8.12",
        "@emotion/react": "^11.8.2",
        "@emotion/styled": "^11.8.1",
        "@mui/lab": "^6.0.0-beta.14",
        "@mui/material": "^6.1.7",
        "@mui/system": "latest",
        "@mui/x-data-grid": "^7.22.2",
        "react-router-dom": "latest",
        "react-router": "latest",
        "react-hook-form": "^7.43.5",
      }}
      startRoute="/products"
      files={{
        "/App.tsx": {
          code: AppTsxCode,
          hidden: true,
        },
        "/pages/products/index.tsx": {
          code: ProductsTsxCode,
          hidden: true,
        },
        "/pages/products/list.tsx": {
          code: ListTsxCode,
          active: true,
        },
        "/pages/products/show.tsx": {
          code: ShowTsxCode,
        },
        "/pages/products/edit.tsx": {
          code: EditTsxCode,
        },
        "/pages/products/create.tsx": {
          code: CreateTsxCode,
        },
      }}
    />
  );
}

const ProductsTsxCode = /* jsx */ `
export * from "./list";
export * from "./show";
export * from "./edit";
export * from "./create";
`.trim();

const AppTsxCode = /* jsx */ `
import { Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import {
  ThemedLayoutV2,
  ErrorComponent,
  RefineThemes,
  notificationProvider,
  RefineSnackbarProvider,
} from "@refinedev/mui";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";

import { ProductList, ProductShow, ProductEdit, ProductCreate } from "./pages/products";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={RefineThemes.Blue}>
        <CssBaseline />
        <GlobalStyles
            styles={{ html: { WebkitFontSmoothing: "auto" } }}
        />
        <RefineSnackbarProvider>
            <Refine
                routerProvider={routerProvider}
                dataProvider={dataProvider(
                    "https://api.fake-rest.refine.dev",
                )}
                notificationProvider={notificationProvider}
                resources={[
                    {
                        name: "products",
                        list: "/products",
                        show: "/products/:id",
                        edit: "/products/:id/edit",
                        create: "/products/create",
                        meta: {
                            canDelete: true,
                        },
                    },
                ]}
                options={{
                    syncWithLocation: true,
                }}
            >
                <Routes>
                    <Route
                        element={
                            <ThemedLayoutV2>
                                <Outlet />
                            </ThemedLayoutV2>
                        }
                    >
                        <Route index element={<NavigateToResource resource="products" />} />
                        <Route path="/products" element={<Outlet />}>
                          <Route index element={<ProductList />} />
                          <Route path="create" element={<ProductCreate />} />
                          <Route path=":id" element={<ProductShow />} />
                          <Route path=":id/edit" element={<ProductEdit />} />
                        </Route>
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
            </Refine>
        </RefineSnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
`.trim();

const ListTsxCode = /* jsx */ `
import React from "react";
import { EditButton, List, ShowButton, useDataGrid } from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const ProductList = () => {
  const { dataGridProps } = useDataGrid();

  const columns = React.useMemo<GridColDef<IProduct>[]>(
    () => [
        {
            field: "id",
            headerName: "ID",
            type: "number",
            width: 50,
        },
        { field: "name", headerName: "Name", minWidth: 300, flex: 1 },
        { field: "price", headerName: "Price", minWidth: 100, flex: 1 },
        {
          field: "actions",
          headerName: "Actions",
          display: "flex",
          renderCell: function render({ row }) {
              return (
                  <div>
                      <EditButton hideText recordItemId={row.id} />
                      <ShowButton hideText recordItemId={row.id} />
                  </div>
              );
          },
          align: "center",
          headerAlign: "center",
          minWidth: 80,
        },
      ],
    []
  );

  return (
    <List>
        <DataGrid {...dataGridProps} columns={columns}  />
    </List>
  );
};

interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
}
`.trim();

const ShowTsxCode = /* jsx */ `
import {
  Show,
  NumberField,
  TextFieldComponent as TextField,
  MarkdownField,
  DateField,
} from "@refinedev/mui";
import { useShow } from "@refinedev/core";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const ProductShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
            Id
        </Typography>
        <NumberField value={record?.id ?? ""} />
        <Typography variant="body1" fontWeight="bold">
            Name
        </Typography>
        <TextField value={record?.name} />
        <Typography variant="body1" fontWeight="bold">
            Material
        </Typography>
        <TextField value={record?.material} />
        <Typography variant="body1" fontWeight="bold">
            Description
        </Typography>
        <MarkdownField value={record?.description} />
        <Typography variant="body1" fontWeight="bold">
            Price
        </Typography>
        <TextField value={record?.price} />
      </Stack>
    </Show>
  );
};
`.trim();

const EditTsxCode = /* jsx */ `
import { HttpError } from "@refinedev/core";
import { Edit, useAutocomplete } from "@refinedev/mui";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useForm } from "@refinedev/react-hook-form";

import { Controller } from "react-hook-form";

export const ProductEdit = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult, autoSaveProps },
    register,
    control,
    formState: { errors },
  } = useForm();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column" }}
      autoComplete="off"
      >
        <TextField
            id="name"
            {...register("name", {
                required: "This field is required",
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
            margin="normal"
            fullWidth
            label="Name"
            name="name"
            autoFocus
        />
        <TextField
            id="material"
            {...register("material", {
                required: "This field is required",
            })}
            error={!!errors.material}
            helperText={errors.material?.message}
            margin="normal"
            fullWidth
            label="Material"
            name="material"
            autoFocus
        />
        <TextField
          id="description"
          {...register("description", {
              required: "This field is required",
          })}
          error={!!errors.description}
          helperText={errors.description?.message}
          margin="normal"
          label="Description"
          multiline
          rows={4}
        />
        <TextField
            id="price"
            {...register("price", {
                required: "This field is required",
            })}
            error={!!errors.price}
            helperText={errors.price?.message}
            margin="normal"
            fullWidth
            label="Price"
            name="price"
            autoFocus
        />
      </Box>
  </Edit>
  );
};
`.trim();

const CreateTsxCode = /* jsx */ `
import { HttpError } from "@refinedev/core";
import { Create, useAutocomplete } from "@refinedev/mui";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useForm } from "@refinedev/react-hook-form";

import { Controller } from "react-hook-form";

export const ProductCreate = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult, autoSaveProps },
    register,
    control,
    formState: { errors },
  } = useForm();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column" }}
      autoComplete="off"
      >
        <TextField
            id="name"
            {...register("name", {
                required: "This field is required",
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
            margin="normal"
            fullWidth
            label="Name"
            name="name"
            autoFocus
        />
        <TextField
            id="material"
            {...register("material", {
                required: "This field is required",
            })}
            error={!!errors.material}
            helperText={errors.material?.message}
            margin="normal"
            fullWidth
            label="Material"
            name="material"
            autoFocus
        />
        <TextField
          id="description"
          {...register("description", {
              required: "This field is required",
          })}
          error={!!errors.description}
          helperText={errors.description?.message}
          margin="normal"
          label="Description"
          multiline
          rows={4}
        />
        <TextField
            id="price"
            {...register("price", {
                required: "This field is required",
            })}
            error={!!errors.price}
            helperText={errors.price?.message}
            margin="normal"
            fullWidth
            label="Price"
            name="price"
            autoFocus
        />
      </Box>
  </Create>
  );
};
`.trim();
