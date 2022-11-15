
xcopy ..\..\..\..\..\WebPages\LJCCodeDoc\HTML\LJCNetCommon\*.* ..\LJCNetCommonCompare /s /y

ren DbColumns.html DbColumnsGen.html
copy DbColumnsCustom.html DbColumns.html

ren DbValues.html DbValuesGen.html
copy DbValuesCustom.html DbValues.html

ren KeyItems.html KeyItemsGen.html
copy KeyItemsCustom.html KeyItems.html

ren LJCAssemblyReflect.html LJCAssemblyReflectGen.html
copy LJCAssemblyReflectCustom.html LJCAssemblyReflect.html

ren NetCommon.html NetCommonGen.html
copy NetCommonCustom.html NetCommon.html

ren NetString.html NetStringGen.html
copy NetStringCustom.html NetString.html