import { CreateElement, RenderContext } from "vue";
import { ElTableTreeColumnPropsInner } from "./props";
import { ColumnScope } from './index';
export declare function hasChild(context: RenderContext<ElTableTreeColumnPropsInner>, scope: ColumnScope): boolean;
export declare function paddingLeft(context: RenderContext<ElTableTreeColumnPropsInner>, scope: ColumnScope): string;
export declare function isNeedExpanedRow(context: RenderContext<ElTableTreeColumnPropsInner>, scope: ColumnScope): boolean;
export declare function isLoadingRow(context: RenderContext<ElTableTreeColumnPropsInner>, scope: ColumnScope): boolean;
export declare function isExpandedRow(context: RenderContext<ElTableTreeColumnPropsInner>, scope: ColumnScope): boolean;
export declare function icon(scope: ColumnScope, context: RenderContext<ElTableTreeColumnPropsInner>): "el-icon-loading" | "el-icon-caret-bottom" | "el-icon-caret-right";
export declare function folderIcon(context: RenderContext<ElTableTreeColumnPropsInner>, scope: ColumnScope): any;
export declare function renderDetail(h: CreateElement, context: RenderContext<ElTableTreeColumnPropsInner>, scope: ColumnScope): any;