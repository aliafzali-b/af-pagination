# a simple pagination

a simple pagination for react to use in your application

![Alt text](/images/demo.jpg "demo image")

# installation

npm install af-pagination

# Usage

```javascript
import AF_Pagination from "af-pagination";
...
const [page, set_page] = useState<number>(1);
...
<AF_Pagination
    current_page={page}
    set_page={set_page}
    total_pages={12}
/>
```

# Options

```
export type AF_Pagination_props = {
  current_page: any;
  set_page: any;
  total_pages?: number;
  total_count?: number;
  per_page?: number;
  activeStyles?: CSSProperties;
  hoverStyles?: CSSProperties;
  navStyles?: CSSProperties;
  navHoverStyles?: CSSProperties;
  style?: CSSProperties;
  show_if_only_one_page?: boolean;
  next_element?: ReactElement;
  prev_element?: ReactElement;
  dots_element?: ReactElement;
  dir?: "rtl" | "ltr";
  gap?: number;
  hideNavigation?: boolean;
};
```
