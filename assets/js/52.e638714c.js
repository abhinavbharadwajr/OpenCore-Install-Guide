(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{553:function(e,t,l){e.exports=l.p+"assets/img/replace.6929333c.png"},554:function(e,t,l){e.exports=l.p+"assets/img/debug.4f3d7c16.png"},664:function(e,t,l){"use strict";l.r(t);var i=l(26),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"opencore-debugging"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#opencore-debugging"}},[e._v("#")]),e._v(" OpenCore Debugging")]),e._v(" "),i("p",[e._v("Needing to figure out why you're getting issues or stalling? Well, you've come to the right place:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#file-swaps"}},[e._v("File Swap")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#config-changes"}},[e._v("Config Changes")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#disabling-all-logging"}},[e._v("Disabling all logging")])])]),e._v(" "),i("h2",{attrs:{id:"file-swaps"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#file-swaps"}},[e._v("#")]),e._v(" File Swaps")]),e._v(" "),i("p",[e._v("To start, make sure you're using either the "),i("code",[e._v("DEBUG")]),e._v(" or "),i("code",[e._v("NOOPT")]),e._v(" versions of OpenCore. This will provide much more info than the "),i("code",[e._v("RELEASE")]),e._v(" version, the specific files that need to be swapped:")]),e._v(" "),i("ul",[i("li",[e._v("EFI/BOOT/\n"),i("ul",[i("li",[i("code",[e._v("BOOTx64.efi")])])])]),e._v(" "),i("li",[e._v("EFI/OC/Bootstrap/\n"),i("ul",[i("li",[i("code",[e._v("Bootstrap.efi")])])])]),e._v(" "),i("li",[e._v("EFI/OC/Drivers/\n"),i("ul",[i("li",[i("code",[e._v("OpenRuntime.efi")])]),e._v(" "),i("li",[i("code",[e._v("OpenCanopy.efi")]),e._v("(if you're using it)")])])]),e._v(" "),i("li",[e._v("EFI/OC/\n"),i("ul",[i("li",[i("code",[e._v("OpenCore.efi")])])])])]),e._v(" "),i("p",[i("img",{attrs:{src:l(553),alt:""}})]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Note")]),e._v(": Generally best to debug systems without OpenCanopy, if required make sure this file is from DEBUG else there will be virtually no debug information.")])]),e._v(" "),i("h2",{attrs:{id:"config-changes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#config-changes"}},[e._v("#")]),e._v(" Config Changes")]),e._v(" "),i("p",[e._v("Next, head to your config.plist and locate the "),i("code",[e._v("Misc")]),e._v(" section, we have a couple entries we'll want to play with here:")]),e._v(" "),i("h3",{attrs:{id:"misc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#misc"}},[e._v("#")]),e._v(" Misc")]),e._v(" "),i("p",[e._v("Here we'll want to enable the following:")]),e._v(" "),i("ul",[i("li",[i("p",[i("strong",[e._v("AppleDebug")]),e._v(": YES")]),e._v(" "),i("ul",[i("li",[e._v("Provides much more debugging information, specifically relating to boot.efi and will also store the log to disk.")])])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("ApplePanic")]),e._v(": YES")]),e._v(" "),i("ul",[i("li",[e._v("This will allow kernel panics to be stored to disk, highly recommend keeping "),i("code",[e._v("keepsyms=1")]),e._v(" in boot-args to preserve as much info as possible.")])])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("DisableWatchdog")]),e._v(": YES")]),e._v(" "),i("ul",[i("li",[e._v("Disables the UEFI watchdog, used for when OpenCore is stalling on something non-critical.")])])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Target")]),e._v(": "),i("code",[e._v("67")]),e._v("(or calculate one below)")]),e._v(" "),i("ul",[i("li",[e._v("Used for enabling different levels of debugging")])])])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[e._v("Value")]),e._v(" "),i("th",{staticStyle:{"text-align":"left"}},[e._v("Comment")])])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[e._v("0x01")])]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("Enable Logging")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[e._v("0x02")])]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("Enable Onscreen debug")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[e._v("0x04")])]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("Enable logging to Data Hub.")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[e._v("0x08")])]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("Enable serial port logging.")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[e._v("0x10")])]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("Enable UEFI variable logging.")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[e._v("0x20")])]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("Enable non-volatile UEFI variable logging.")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[e._v("0x40")])]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("Enable logging to file.")])])])]),e._v(" "),i("p",[e._v("To calculate the target, we can use a HEX calculator and then convert it to decimal. For us we want to have our values on stored onto a .txt file for later viewing:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("0x01")]),e._v(" — Enable Logging")]),e._v(" "),i("li",[i("code",[e._v("0x02")]),e._v(" — Enable Onscreen debug\n"),i("ul",[i("li",[e._v("Note this can heavily increase boot times on firmwares with poor GOP implementations")])])]),e._v(" "),i("li",[i("code",[e._v("0x10")]),e._v(" — Enable UEFI variable logging.")]),e._v(" "),i("li",[i("code",[e._v("0x40")]),e._v(" — Enable logging to file.")])]),e._v(" "),i("p",[i("code",[e._v("0x01")]),e._v(" + "),i("code",[e._v("0x02")]),e._v(" + "),i("code",[e._v("0x10")]),e._v(" + "),i("code",[e._v("0x40")]),e._v(" = "),i("code",[e._v("0x53")])]),e._v(" "),i("p",[i("code",[e._v("0x53")]),e._v(" converted to decimal becomes "),i("code",[e._v("83")])]),e._v(" "),i("p",[e._v("So we can set "),i("code",[e._v("Misc")]),e._v(" -> "),i("code",[e._v("Debug")]),e._v(" -> "),i("code",[e._v("Target")]),e._v(" -> "),i("code",[e._v("83")])]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("DisplayLevel")]),e._v(": "),i("code",[e._v("2147483714")]),e._v("(or calculate one below)\n"),i("ul",[i("li",[e._v("Used for setting what is logged")])])])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[e._v("Value")]),e._v(" "),i("th",{staticStyle:{"text-align":"left"}},[e._v("Comment")])])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[e._v("0x00000002")])]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("DEBUG_WARN in DEBUG, NOOPT, RELEASE.")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[e._v("0x00000040")])]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("DEBUG_INFO in DEBUG, NOOPT.")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[e._v("0x00400000")])]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("DEBUG_VERBOSE in custom builds.")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[e._v("0x80000000")])]),e._v(" "),i("td",{staticStyle:{"text-align":"left"}},[e._v("DEBUG_ERROR in DEBUG, NOOPT, RELEASE.")])])])]),e._v(" "),i("p",[e._v("A full list can be found in "),i("a",{attrs:{href:"https://github.com/tianocore/edk2/blob/UDK2018/MdePkg/Include/Library/DebugLib.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("DebugLib.h"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("For us we just want the following:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("0x00000002")]),e._v(" — DEBUG_WARN in DEBUG, NOOPT, RELEASE.")]),e._v(" "),i("li",[i("code",[e._v("0x00000040")]),e._v(" — DEBUG_INFO in DEBUG, NOOPT.")]),e._v(" "),i("li",[i("code",[e._v("0x80000000")]),e._v(" — DEBUG_ERROR in DEBUG, NOOPT, RELEASE.")])]),e._v(" "),i("p",[e._v("Just like with "),i("code",[e._v("Target")]),e._v(", we use a HEX calculator then convert to decimal:")]),e._v(" "),i("p",[i("code",[e._v("0x80000042")]),e._v(" Converted to decimal "),i("code",[e._v("Misc")]),e._v(" -> "),i("code",[e._v("Debug")]),e._v(" -> "),i("code",[e._v("DisplayLevel")]),e._v(" -> "),i("code",[e._v("2147483714")])]),e._v(" "),i("p",[e._v("Once done, your config.plist should look like this:")]),e._v(" "),i("p",[i("img",{attrs:{src:l(554),alt:""}})]),e._v(" "),i("h2",{attrs:{id:"disabling-all-logging"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#disabling-all-logging"}},[e._v("#")]),e._v(" Disabling all logging")]),e._v(" "),i("p",[e._v("To remove all file logging, and debug messages, simply swap out all your OpenCore files for those in RELEASE like we did before in "),i("a",{attrs:{href:"#file-swap"}},[e._v("File Swap")]),e._v(" section.")]),e._v(" "),i("p",[e._v("Lastly, to remove writing to disk set the following:")]),e._v(" "),i("ul",[i("li",[e._v("AppleDebug = "),i("code",[e._v("NO")])]),e._v(" "),i("li",[e._v("ApplePanic = "),i("code",[e._v("NO")])]),e._v(" "),i("li",[e._v("Target = "),i("code",[e._v("0")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);