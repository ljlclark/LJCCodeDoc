"use strict";
// CCodeDocNavEvents.js

class CNavEvents
{
  // Initializes an object instance with the provided values.
  constructor(contentFrame)
  {
    this.ContentFrame = contentFrame;
    this.PrevNavItem = null;
    this.NavItems = new CodeDocNavItems();
    this.CreateNavItems();
  }

  // Adds the HTML event handlers.
  AddEvents()
  {
    // Event Handlers.
    window.addEventListener("resize", this.WindowResize.bind(this))
    document.addEventListener("click", this.DocumentClick.bind(this));
    menuIco.addEventListener("click", this.MenuClick.bind(this));
    content.addEventListener("mouseenter", this.ContentMouseEnter.bind(this));

    this.menubar = document.getElementById("menubar");
    this.menuIco = document.getElementById("menuIco");
    this.sidebar = document.getElementById("sidebar");
    this.content = document.getElementById("content");
    this.menubar.style.display = "none";
    this.menuIco.style.display = "none";
    this.reducedWidth = false;
    this.WindowResize();
  }

  // 
  WindowResize()
  {
    let width = window.innerWidth;  // Webpage with scrollbars
    if (width < 800)
    {
      this.reducedWidth = true;
      this.menubar.style.display = "block";
      this.menuIco.style.display = "block";
      this.sidebar.style.display = "none";
      this.sidebar.style.width = "240px";  // use widest string width?
      this.content.style.width = "100%";
    }
    else
    {
      this.reducedWidth = false;
      this.menubar.style.display = "none";
      this.menuIco.style.display = "none";
      this.sidebar.style.display = "inline-block";
      this.sidebar.style.position = "relative";
      this.sidebar.style.width = "25%";  // use widest string width?
      this.content.style.width = "75%";
    }
  }

  // 
  MenuClick()
  {
    if (this.sidebar.style.display == "none")
    {
      this.sidebar.style.display = "inline-block";
      this.sidebar.style.position = "absolute";
    }
    else
    {
      this.sidebar.style.display = "none";
    }
  }

  // 
  ContentMouseEnter()
  {
    if (this.reducedWidth == true)
    {
      this.sidebar.style.display = "none";
    }
  }

  // Document "click" handler method.
  // event - The Target event.
  DocumentClick(event)
  {
    let srcElement = event.target;
    if ("navGroup" === srcElement.className
      || "navItem" === srcElement.className)
    {
      let navItem = this.NavItems.SearchName(srcElement.id);
      if (navItem != null)
      {
        if (this.ContentFrame != null)
        {
          this.ContentMouseEnter();
          this.ContentFrame.src = navItem.URL;
        }
      }

      if (this.PrevNavItem != null)
      {
        this.PrevNavItem.style.backgroundColor = "";
      }
      this.PrevNavItem = srcElement;
      srcElement.style.backgroundColor = "#d4dfff";
    }
  }

  // Creates the NavItem entries.
  CreateNavItems()
  {
    this.NavItems.Add("Projects", "CodeDoc.html");
    this.NavItems.Add("Build", "SystemBuild.html");

    // * Common Libraries
    // - .NET Code
    this.NavItems.Add("NetCommon", "HTML/LJCNetCommon/LJCNetCommon.html");

    // - WinForms
    this.NavItems.Add("Common", "HTML/LJCWinFormCommon/LJCWinFormCommon.html");
    this.NavItems.Add("Controls", "HTML/LJCWinFormControls/LJCWinFormControls.html");
    this.NavItems.Add("GridLib", "HTML/LJCGridDataLib/LJCGridDataLib.html");

    // - Text DataReader
    this.NavItems.Add("Reader", "HTML/LJCTextDataReaderLib/LJCTextDataReaderLib.html");

    // - DataDetail
    this.NavItems.Add("Dtl", "HTML/DataDetail/DataDetail.html");
    this.NavItems.Add("DtlLib", "HTML/LJCDataDetailLib/LJCDataDetailLib.html");
    this.NavItems.Add("DtlCon", "HTML/LJCDataDetailConsole/LJCDataDetailConsole.html");

    // * Data Libraries
    // - Data Access
    this.NavItems.Add("Overview", "DataOverview.html");
    this.NavItems.Add("Data", "HTML/LJCDataAccess/LJCDataAccess.html");
    this.NavItems.Add("DBData", "HTML/LJCDBDataAccess/LJCDBDataAccess.html");
    this.NavItems.Add("Config", "HTML/LJCDataAccessConfig/LJCDataAccessConfig.html");

    // - Client
    this.NavItems.Add("Client", "HTML/LJCDBClientLib/LJCDBClientLib.html");
    this.NavItems.Add("Message", "HTML/LJCDBMessage/LJCDBMessage.html");
    this.NavItems.Add("Key", "HTML/ForeignKeyManagerTest/ForeignKeyManagerTest.html");
    this.NavItems.Add("SQLUtil", "HTML/LJCSQLUtilLib/LJCSQLUtilLib.html");
    this.NavItems.Add("SQLUtilDAL", "HTML/LJCSQLUtilLibDAL/LJCSQLUtilLibDAL.html");

    // - Server
    this.NavItems.Add("Host", "HTML/LJCDBServiceHost/LJCDBServiceHost.html");
    this.NavItems.Add("HostCon", "HTML/LJCDBServiceConsoleHost/LJCDBServiceConsoleHost.html");
    this.NavItems.Add("DBService", "HTML/LJCDBServiceLib/LJCDBServiceLib.html");

    // * Code Generator Utility
    // - Code Generator
    this.NavItems.Add("GenText", "HTML/LJCGenText/LJCGenText.html");
    this.NavItems.Add("GenLib", "HTML/LJCGenTextLib/LJCGenTextLib.html");

    // - Code Generation Editor
    this.NavItems.Add("GenEdit", "HTML/LJCGenTextEdit/LJCGenTextEdit.html");
    this.NavItems.Add("GenTable", "HTML/LJCGenTableCode/LJCGenTableCode.html");

    // * HTML Documentation Generator
    // - Page Generation
    this.NavItems.Add("DocGen", "HTML/LJCDocGen/LJCDocGen.html");
    this.NavItems.Add("DocLib", "HTML/LJCDocGenLib/LJCDocGenLib.html");

    // - Deserialization Objects
    this.NavItems.Add("DocDAL", "HTML/LJCDocLibDAL/LJCDocLibDAL.html");
    this.NavItems.Add("DocObj", "HTML/LJCDocObjLib/LJCDocObjLib.html");
    this.NavItems.Add("DocXML", "HTML/LJCDocXMLObjLib/LJCDocXMLObjLib.html");

    // - Group Editor
    this.NavItems.Add("DocEdit", "HTML/LJCDocGroupEditor/LJCDocGroupEditor.html");

    // * CVR Manager
    this.NavItems.Add("CVMgr", "HTML/CVRManager/CVRManager.html");
    this.NavItems.Add("CVDAL", "HTML/CVRDAL/CVRDAL.html");

    // * Unit Measure
    this.NavItems.Add("Unit", "HTML/LJCUnitMeasure/LJCUnitMeasure.html");
    this.NavItems.Add("UnitDAL", "HTML/LJCUnitMeasureDAL/LJCUnitMeasureDAL.html");

    // * Region Manager
    this.NavItems.Add("RegMgr", "HTML/LJCRegionManager/LJCRegionManager.html");
    this.NavItems.Add("RegDAL", "HTML/LJCRegionDAL/LJCRegionDAL.html");
    this.NavItems.Add("RegForm", "HTML/LJCRegionForm/LJCRegionForm.html");

    // * DataView
    // - DataView Data Access Layer
    this.NavItems.Add("ViewDAL", "HTML/LJCDBViewDAL/LJCDBViewDAL.html");

    // - DataView Builder
    this.NavItems.Add("ViewBuild", "HTML/LJCViewBuilder/LJCViewBuilder.html");

    // - DataView Editor
    this.NavItems.Add("ViewEdit", "HTML/LJCViewEditor/LJCViewEditor.html");
    this.NavItems.Add("ViewEditDAL", "HTML/LJCViewEditorDAL/LJCViewEditorDAL.html");

    // * Code Line Counter and Text Finder
    this.NavItems.Add("LineCount", "HTML/LJCCodeLineCounter/LJCCodeLineCounter.html");
  }
}