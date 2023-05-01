import React, { useState } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".styles-module_pagination-container__D3Ecp {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.styles-module_pagination-container__D3Ecp .styles-module_single-pagination-button__Yawfz,\n.styles-module_pagination-container__D3Ecp .styles-module_single-pagination-nav-button__pdnLG {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  min-width: 40px;\n  min-height: 40px;\n  background-color: white;\n  color: black;\n  transition: 0.2s ease-in-out;\n  cursor: pointer;\n}\n.styles-module_pagination-container__D3Ecp .styles-module_single-pagination-button__Yawfz.styles-module_active__dKbiv,\n.styles-module_pagination-container__D3Ecp .styles-module_single-pagination-nav-button__pdnLG.styles-module_active__dKbiv {\n  border-color: blue;\n}\n.styles-module_pagination-container__D3Ecp .styles-module_single-pagination-button__Yawfz:hover:not(.styles-module_active__dKbiv),\n.styles-module_pagination-container__D3Ecp .styles-module_single-pagination-nav-button__pdnLG:hover:not(.styles-module_active__dKbiv) {\n  border-color: rgba(0, 0, 255, 0.4);\n}\n.styles-module_pagination-container__D3Ecp .styles-module_dots__hL6tm {\n  min-width: 40px;\n  min-height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}";
var stylesModule = {"pagination-container":"styles-module_pagination-container__D3Ecp","single-pagination-button":"styles-module_single-pagination-button__Yawfz","single-pagination-nav-button":"styles-module_single-pagination-nav-button__pdnLG","active":"styles-module_active__dKbiv","dots":"styles-module_dots__hL6tm"};
styleInject(css_248z);

const PrevBtn = (props) => {
    const [hovered, set_hovered] = useState(false);
    let styles = props.style ? props.style : {};
    if (hovered && props.hoverStyles)
        styles = Object.assign(Object.assign({}, styles), props.hoverStyles);
    if (props.navStyles)
        styles = Object.assign(Object.assign({}, styles), props.navStyles);
    if (hovered && props.navHoverStyles)
        styles = Object.assign(Object.assign({}, styles), props.navHoverStyles);
    return (React.createElement("button", { onMouseEnter: () => set_hovered(true), onMouseLeave: () => set_hovered(false), style: styles, className: `${stylesModule["single-pagination-nav-button"]} ${stylesModule["prev-page-button"]}`, onClick: () => props.current_page > 1 && props.set_page(props.current_page - 1) }, props.prev_element ? (props.prev_element) : (React.createElement(React.Fragment, null, props.dir === "rtl" ? (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16" },
        React.createElement("path", { "fill-rule": "evenodd", d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" }))) : (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16" },
        React.createElement("path", { "fill-rule": "evenodd", d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" })))))));
};

const NextBtn = (props) => {
    const [hovered, set_hovered] = useState(false);
    let styles = props.style ? props.style : {};
    if (hovered && props.hoverStyles)
        styles = Object.assign(Object.assign({}, styles), props.hoverStyles);
    if (props.navStyles)
        styles = Object.assign(Object.assign({}, styles), props.navStyles);
    if (hovered && props.navHoverStyles)
        styles = Object.assign(Object.assign({}, styles), props.navHoverStyles);
    return (React.createElement("button", { onMouseEnter: () => set_hovered(true), onMouseLeave: () => set_hovered(false), style: styles, className: `${stylesModule["single-pagination-nav-button"]} ${stylesModule["next-page-button"]}`, onClick: () => props.current_page !== props.totalPage &&
            props.set_page(props.current_page + 1) }, props.next_element ? (props.next_element) : (React.createElement(React.Fragment, null, props.dir === "rtl" ? (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16" },
        React.createElement("path", { "fill-rule": "evenodd", d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" }))) : (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16" },
        React.createElement("path", { "fill-rule": "evenodd", d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" })))))));
};

const SingleBtn = (props) => {
    const [hovered, set_hovered] = useState(false);
    let styles = props.style ? props.style : {};
    const is_active = props.current_page === props.page;
    if (is_active && props.activeStyles)
        styles = Object.assign(Object.assign({}, styles), props.activeStyles);
    if (hovered && props.hoverStyles)
        styles = Object.assign(Object.assign({}, styles), props.hoverStyles);
    return (React.createElement("button", { onMouseEnter: () => set_hovered(true), onMouseLeave: () => set_hovered(false), style: styles, key: `af-pagination-page-${props.page}`, className: `${stylesModule["single-pagination-button"]} ${stylesModule["prev-page-button"]} ${is_active ? stylesModule["active"] : ""}`, onClick: () => props.current_page !== props.page && props.set_page(props.page) }, props.page));
};

const Dots = (props) => {
    if (props.dots_element)
        return props.dots_element;
    return (React.createElement("span", { className: `${stylesModule["dots"]}` },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16" },
            React.createElement("path", { d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" }))));
};

function createArray(length) {
    return Array.from({ length }, (_v, i) => i + 1);
    //const myArray = createArray(6)
    // Output: [1, 2, 3, 4, 5, 6]
}

const AF_Pagination = (props) => {
    let { per_page, current_page, //1,2,3,...
    total_count, total_pages, show_if_only_one_page, } = props;
    let totalPage = 1;
    if (total_pages)
        totalPage = Math.ceil(total_pages);
    if (total_count && per_page)
        totalPage = Math.ceil(total_count / per_page);
    if (totalPage <= 0)
        return null;
    if (totalPage === 1 && !show_if_only_one_page)
        return null;
    let valid_pages = createArray(totalPage);
    let allowedPages = [
        1,
        2,
        current_page - 1,
        current_page,
        current_page + 1,
        totalPage - 1,
        totalPage,
    ];
    let finalPages = valid_pages.filter((page) => allowedPages.includes(page));
    let gap = props.gap != null ? props.gap : 5;
    return (React.createElement("div", { dir: props.dir, className: `${stylesModule["pagination-container"]}`, style: { gap: `${gap}px` } },
        !props.hideNavigation && current_page > 1 && React.createElement(PrevBtn, Object.assign({}, props)),
        finalPages.map((page) => {
            return (React.createElement(React.Fragment, null,
                current_page < totalPage - 3 && page === totalPage - 1 && (React.createElement(Dots, Object.assign({}, props))),
                React.createElement(SingleBtn, Object.assign({}, props, { page: page })),
                current_page > 4 && page === 2 && React.createElement(Dots, Object.assign({}, props))));
        }),
        !props.hideNavigation && current_page !== totalPage && (React.createElement(NextBtn, Object.assign({}, props, { totalPage: totalPage })))));
};

export { AF_Pagination as default };
