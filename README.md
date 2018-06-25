# 修改说明
## 响应式相关
1. 增加`responsive.css`，实现响应式布局
2. 修改`style.css`，在展示餐厅信息的`li`标签之下，新增一层`div`。并取消了固定宽度(270px)。改为根据屏幕大小来决定相对宽度。部分`li`的样式转移到`div`内（`main.js`）
3. 修改`style.css`，取消了`.filter-options`的固定高度50px，并改为，小屏幕时，title占一行，selection占一行或两行；大屏幕时，三个元素一行展示
4. 修改`style.css`，title垂直居中（`nav h1`）
5. 餐厅详细界面修改，小屏幕时，地图、餐厅、review三个section各独占一整行

## Service Worker
1. 添加sw.js