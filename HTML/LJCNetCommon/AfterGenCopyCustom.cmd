
xcopy ..\..\..\..\..\WebPages\LJCCodeDoc\HTML\LJCNetCommon\*.* ..\LJCNetCommonCompare /s /y

copy DbColumns.html DbColumnsGen.html
copy DbColumnsCustom.html DbColumns.html

copy DbValues.html DbValuesGen.html
copy DbValuesCustom.html DbValues.html

copy KeyItems.html KeyItemsGen.html
copy KeyItemsCustom.html KeyItems.html

copy LJCAssemblyReflect.html LJCAssemblyReflectGen.html
copy LJCAssemblyReflectCustom.html LJCAssemblyReflect.html

copy NetCommon.html NetCommonGen.html
copy NetCommonCustom.html NetCommon.html

copy NetString.html NetStringGen.html
copy NetStringCustom.html NetString.html