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
