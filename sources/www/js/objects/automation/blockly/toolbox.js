
/**
 * Create the toolbox
 * @return {string} The toolbox xml string
 */
Blockly.Yadoms.CreateToolbox_ = function () {

    var catLogic = $.t("blockly.toolbox.catLogic");
    var catLoops = $.t("blockly.toolbox.catLoops");
    var catMath = $.t("blockly.toolbox.catMath");
    var catText = $.t("blockly.toolbox.catText");
    var catDates = $.t("blockly.toolbox.catDates");
    var catLists = $.t("blockly.toolbox.catLists");
    var catColour = $.t("blockly.toolbox.catColour");

    var catActions = $.t("blockly.toolbox.catActions");
    var catDevices = $.t("blockly.toolbox.catDevices");
    var catEnumerations = $.t("blockly.toolbox.catEnumerations");
    var catVariables = $.t("blockly.toolbox.catVariables");
    var catFunctions = $.t("blockly.toolbox.catFunctions");
    var catTemplate = $.t("blockly.toolbox.catTemplate");

    var toolbox = "<xml>";

    toolbox += "  <category name=\"" + catActions + "\" colour=\"20\">";
    toolbox += "    <block type=\"yadoms_wait_for_event\"></block>";
    toolbox += "    <block type=\"yadoms_wait_for_event_result\"></block>";
    toolbox += "    <sep></sep>";
    toolbox += "    <block type=\"yadoms_notification_simple\">";
    toolbox += "        <value name=\"Value\">";
    toolbox += "           <shadow type=\"text\"></shadow>";
    toolbox += "        </value>";
    toolbox += "    </block>";
    toolbox += "    <sep></sep>";
    toolbox += "    <block type=\"yadoms_sleep\">";
    toolbox += "        <value name=\"Time\">";
    toolbox += "           <shadow type=\"math_number\">";
    toolbox += "              <field name=\"NUM\">10</field>";
    toolbox += "           </shadow>";
    toolbox += "        </value>";
    toolbox += "    </block>";
    toolbox += "  </category>";

    toolbox += "  <category name=\"" + catDevices + "\" colour=\"20\">";
    toolbox += "    <block type=\"keyword-value-get\"></block>";
    toolbox += "    <block type=\"keyword-value-set\"></block>";
    toolbox += "  </category>";

    toolbox += "  <sep></sep>";
    

    toolbox += "  <category name=\"" + catLogic + "\" colour=\"210\">";
    toolbox += "     <block type=\"controls_if\"></block>";
    toolbox += "     <block type=\"logic_compare\"></block>";
    toolbox += "     <block type=\"logic_operation\"></block>";
    toolbox += "     <block type=\"yadoms_logic_negate\"></block>";
    toolbox += "     <block type=\"logic_boolean\"></block>";
    toolbox += "     <block type=\"logic_null\"></block>";
    toolbox += "     <block type=\"logic_ternary\"></block>";
    toolbox += "  </category>";
    toolbox += "  <category name=\"" + catLoops + "\" colour=\"120\">";
    toolbox += "     <block type=\"infinite-loop\"></block>";
    toolbox += "     <block type=\"controls_whileUntil\"></block>";
    toolbox += "     <block type=\"controls_repeat_ext\">";
    toolbox += "        <value name=\"TIMES\">";
    toolbox += "           <shadow type=\"math_number\">";
    toolbox += "              <field name=\"NUM\">10</field>";
    toolbox += "           </shadow>";
    toolbox += "        </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"controls_for\">";
    toolbox += "        <value name=\"FROM\">";
    toolbox += "           <shadow type=\"math_number\">";
    toolbox += "              <field name=\"NUM\">1</field>";
    toolbox += "           </shadow>";
    toolbox += "        </value>";
    toolbox += "        <value name=\"TO\">";
    toolbox += "           <shadow type=\"math_number\">";
    toolbox += "              <field name=\"NUM\">10</field>";
    toolbox += "           </shadow>";
    toolbox += "        </value>";
    toolbox += "        <value name=\"BY\">";
    toolbox += "           <shadow type=\"math_number\">";
    toolbox += "              <field name=\"NUM\">1</field>";
    toolbox += "           </shadow>";
    toolbox += "        </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"controls_forEach\"></block>";
    toolbox += "     <block type=\"controls_flow_statements\"></block>";
    toolbox += "  </category>";
    toolbox += "  <category name=\"" + catMath + "\" colour=\"230\">";
    toolbox += "      <block type=\"math_number\" gap=\"32\"></block>";
    toolbox += "      <block type=\"math_arithmetic\">";
    toolbox += "        <value name=\"A\">";
    toolbox += "          <shadow type=\"math_number\">";
    toolbox += "            <field name=\"NUM\">1</field>";
    toolbox += "          </shadow>";
    toolbox += "        </value>";
    toolbox += "        <value name=\"B\">";
    toolbox += "          <shadow type=\"math_number\">";
    toolbox += "            <field name=\"NUM\">1</field>";
    toolbox += "          </shadow>";
    toolbox += "        </value>";
    toolbox += "      </block>";
    toolbox += "      <block type=\"math_single\">";
    toolbox += "        <value name=\"NUM\">";
    toolbox += "          <shadow type=\"math_number\">";
    toolbox += "            <field name=\"NUM\">9</field>";
    toolbox += "          </shadow>";
    toolbox += "        </value>";
    toolbox += "      </block>";
    toolbox += "      <block type=\"math_trig\">";
    toolbox += "        <value name=\"NUM\">";
    toolbox += "          <shadow type=\"math_number\">";
    toolbox += "            <field name=\"NUM\">45</field>";
    toolbox += "          </shadow>";
    toolbox += "        </value>";
    toolbox += "      </block>";
    toolbox += "      <block type=\"math_constant\"></block>";
    toolbox += "      <block type=\"math_number_property\">";
    toolbox += "        <value name=\"NUMBER_TO_CHECK\">";
    toolbox += "          <shadow type=\"math_number\">";
    toolbox += "            <field name=\"NUM\">0</field>";
    toolbox += "          </shadow>";
    toolbox += "        </value>";
    toolbox += "      </block>";
    toolbox += "      <block type=\"math_change\">";
    toolbox += "        <value name=\"DELTA\">";
    toolbox += "          <shadow type=\"math_number\">";
    toolbox += "            <field name=\"NUM\">1</field>";
    toolbox += "          </shadow>";
    toolbox += "        </value>";
    toolbox += "      </block>";
    toolbox += "      <block type=\"math_round\">";
    toolbox += "        <value name=\"NUM\">";
    toolbox += "          <shadow type=\"math_number\">";
    toolbox += "            <field name=\"NUM\">3.1</field>";
    toolbox += "          </shadow>";
    toolbox += "        </value>";
    toolbox += "      </block>";
    toolbox += "      <block type=\"math_on_list\"></block>";
    toolbox += "      <block type=\"math_modulo\">";
    toolbox += "        <value name=\"DIVIDEND\">";
    toolbox += "          <shadow type=\"math_number\">";
    toolbox += "            <field name=\"NUM\">64</field>";
    toolbox += "          </shadow>";
    toolbox += "        </value>";
    toolbox += "        <value name=\"DIVISOR\">";
    toolbox += "          <shadow type=\"math_number\">";
    toolbox += "            <field name=\"NUM\">10</field>";
    toolbox += "          </shadow>";
    toolbox += "        </value>";
    toolbox += "      </block>";
    toolbox += "      <block type=\"math_constrain\">";
    toolbox += "        <value name=\"VALUE\">";
    toolbox += "          <shadow type=\"math_number\">";
    toolbox += "            <field name=\"NUM\">50</field>";
    toolbox += "          </shadow>";
    toolbox += "        </value>";
    toolbox += "        <value name=\"LOW\">";
    toolbox += "          <shadow type=\"math_number\">";
    toolbox += "            <field name=\"NUM\">1</field>";
    toolbox += "          </shadow>";
    toolbox += "        </value>";
    toolbox += "        <value name=\"HIGH\">";
    toolbox += "          <shadow type=\"math_number\">";
    toolbox += "            <field name=\"NUM\">100</field>";
    toolbox += "          </shadow>";
    toolbox += "        </value>";
    toolbox += "      </block>";
    toolbox += "      <block type=\"math_random_int\">";
    toolbox += "        <value name=\"FROM\">";
    toolbox += "          <shadow type=\"math_number\">";
    toolbox += "            <field name=\"NUM\">1</field>";
    toolbox += "          </shadow>";
    toolbox += "        </value>";
    toolbox += "        <value name=\"TO\">";
    toolbox += "          <shadow type=\"math_number\">";
    toolbox += "            <field name=\"NUM\">100</field>";
    toolbox += "          </shadow>";
    toolbox += "        </value>";
    toolbox += "      </block>";
    toolbox += "      <block type=\"math_random_float\">";
    toolbox += "      </block>";
    toolbox += "  </category>";
    toolbox += "  <category name=\"" + catText + "\" colour=\"160\">";
    toolbox += "     <block type=\"text\"></block>";
    toolbox += "     <block type=\"yadoms_log\">";
    toolbox += "         <value name=\"LogContent\">";
    toolbox += "            <shadow type=\"text\">";
    toolbox += "            </shadow>";
    toolbox += "         </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"text_join\"></block>";
    toolbox += "     <block type=\"text_append\">";
    toolbox += "       <value name=\"TEXT\">";
    toolbox += "         <shadow type=\"text\"></shadow>";
    toolbox += "       </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"text_length\">";
    toolbox += "       <value name=\"VALUE\">";
    toolbox += "         <shadow type=\"text\">";
    toolbox += "           <field name=\"TEXT\">abc</field>";
    toolbox += "         </shadow>";
    toolbox += "       </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"text_isEmpty\">";
    toolbox += "       <value name=\"VALUE\">";
    toolbox += "         <shadow type=\"text\">";
    toolbox += "           <field name=\"TEXT\"></field>";
    toolbox += "         </shadow>";
    toolbox += "       </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"text_indexOf\">";
    toolbox += "       <value name=\"VALUE\">";
    toolbox += "         <block type=\"variables_get\">";
    toolbox += "           <field name=\"VAR\">text</field>";
    toolbox += "         </block>";
    toolbox += "       </value>";
    toolbox += "       <value name=\"FIND\">";
    toolbox += "         <shadow type=\"text\">";
    toolbox += "           <field name=\"TEXT\">abc</field>";
    toolbox += "         </shadow>";
    toolbox += "       </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"text_charAt\">";
    toolbox += "       <value name=\"VALUE\">";
    toolbox += "         <block type=\"variables_get\">";
    toolbox += "           <field name=\"VAR\">text</field>";
    toolbox += "         </block>";
    toolbox += "       </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"text_getSubstring\">";
    toolbox += "       <value name=\"STRING\">";
    toolbox += "         <block type=\"variables_get\">";
    toolbox += "           <field name=\"VAR\">text</field>";
    toolbox += "         </block>";
    toolbox += "       </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"text_changeCase\">";
    toolbox += "       <value name=\"TEXT\">";
    toolbox += "         <shadow type=\"text\">";
    toolbox += "           <field name=\"TEXT\">abc</field>";
    toolbox += "         </shadow>";
    toolbox += "       </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"text_trim\">";
    toolbox += "       <value name=\"TEXT\">";
    toolbox += "         <shadow type=\"text\">";
    toolbox += "           <field name=\"TEXT\">abc</field>";
    toolbox += "         </shadow>";
    toolbox += "       </value>";
    toolbox += "     </block>";
    toolbox += "  </category>";

    if (Blockly.Yadoms.EnumerationsHelper.allBlocks.length > 0) {
        toolbox += "  <category name=\"" + catEnumerations + "\" colour=\"20\">";
        $.each(Blockly.Yadoms.EnumerationsHelper.allBlocks, function (index, value) {
            toolbox += "     <block type=\"" + value + "\"></block>";
        });
        toolbox += "  </category>";
    }

    toolbox += "  <category name=\"" + catDates + "\" colour=\"260\">";
    toolbox += "    <block type=\"yadoms_date_datetime\">";
    toolbox += "        <value name=\"dateInput\">";
    toolbox += "           <block type=\"yadoms_date_everyDay\">";
    toolbox += "           </block>";
    toolbox += "        </value>";	
    toolbox += "        <value name=\"timeInput\">";
    toolbox += "           <block type=\"yadoms_date_time\">";
    toolbox += "              <value name=\"hourInput\">";
    toolbox += "           	     <shadow type=\"math_number\">";
    toolbox += "                    <field name=\"NUM\">12</field>";
    toolbox += "           	     </shadow>";
    toolbox += "              </value>";
    toolbox += "              <value name=\"minuteInput\">";
    toolbox += "           	     <shadow type=\"math_number\">";
    toolbox += "                    <field name=\"NUM\">00</field>";
    toolbox += "           	     </shadow>";
    toolbox += "              </value>";
    toolbox += "           </block>";
    toolbox += "        </value>";	
    toolbox += "    </block>";
    toolbox += "    <block type=\"yadoms_date_date\"></block>";
    toolbox += "    <block type=\"yadoms_date_time\">";
    toolbox += "       <value name=\"hourInput\">";
    toolbox += "         <shadow type=\"math_number\">";
    toolbox += "            <field name=\"NUM\">12</field>";
    toolbox += "         </shadow>";
    toolbox += "       </value>";
    toolbox += "       <value name=\"minuteInput\">";
    toolbox += "         <shadow type=\"math_number\">";
    toolbox += "            <field name=\"NUM\">00</field>";
    toolbox += "         </shadow>";
    toolbox += "       </value>";
    toolbox += "    </block>";
    toolbox += "    <block type=\"yadoms_date_everyDay\"></block>";
    toolbox += "    <block type=\"yadoms_date_weekDay\"></block>";
    toolbox += "    <block type=\"yadoms_date_sunrise\"></block>";
    toolbox += "    <block type=\"yadoms_date_sunset\"></block>";
    toolbox += "    <block type=\"yadoms_date_arithmetic\"></block>";
    toolbox += "    <block type=\"yadoms_date_timespan\">";
    toolbox += "        <value name=\"hourInput\">";
    toolbox += "           <shadow type=\"math_number\">";
    toolbox += "              <field name=\"NUM\">1</field>";
    toolbox += "           </shadow>";
    toolbox += "        </value>";
    toolbox += "        <value name=\"minuteInput\">";
    toolbox += "           <shadow type=\"math_number\">";
    toolbox += "              <field name=\"NUM\">0</field>";
    toolbox += "           </shadow>";
    toolbox += "        </value>";
    toolbox += "    </block>";
    toolbox += "    <block type=\"yadoms_date_today\"></block>";
    toolbox += "    <block type=\"yadoms_date_now\"></block>";
    toolbox += "    <block type=\"yadoms_date_extract\"></block>";
    toolbox += "  </category>";

    toolbox += "  <category name=\"" + catLists + "\" colour=\"260\">";
    toolbox += "     <block type=\"lists_create_empty\"></block>";
    toolbox += "     <block type=\"lists_create_with\"></block>";
    toolbox += "     <block type=\"lists_repeat\">";
    toolbox += "        <value name=\"NUM\">";
    toolbox += "           <shadow type=\"math_number\">";
    toolbox += "              <field name=\"NUM\">5</field>";
    toolbox += "           </shadow>";
    toolbox += "        </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"lists_length\"></block>";
    toolbox += "     <block type=\"lists_isEmpty\"></block>";
    toolbox += "     <block type=\"lists_indexOf\">";
    toolbox += "        <value name=\"VALUE\">";
    toolbox += "           <block type=\"variables_get\">";
    toolbox += "              <field name=\"VAR\">list</field>";
    toolbox += "           </block>";
    toolbox += "        </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"lists_getIndex\">";
    toolbox += "        <value name=\"VALUE\">";
    toolbox += "           <block type=\"variables_get\">";
    toolbox += "              <field name=\"VAR\">list</field>";
    toolbox += "           </block>";
    toolbox += "        </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"lists_setIndex\">";
    toolbox += "        <value name=\"LIST\">";
    toolbox += "           <block type=\"variables_get\">";
    toolbox += "              <field name=\"VAR\">list</field>";
    toolbox += "           </block>";
    toolbox += "        </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"lists_getSublist\">";
    toolbox += "        <value name=\"LIST\">";
    toolbox += "           <block type=\"variables_get\">";
    toolbox += "              <field name=\"VAR\">list</field>";
    toolbox += "           </block>";
    toolbox += "        </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"lists_split\">";
    toolbox += "        <value name=\"DELIM\">";
    toolbox += "           <shadow type=\"text\">";
    toolbox += "              <field name=\"TEXT\">,</field>";
    toolbox += "           </shadow>";
    toolbox += "        </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"lists_sort\">";
    toolbox += "        <field name=\"TYPE\">NUMERIC</field>";
    toolbox += "        <field name=\"DIRECTION\">1</field>";
    toolbox += "     </block>";
    toolbox += "  </category>";
    toolbox += "  <category name=\"" + catColour + "\" colour=\"20\">";
    toolbox += "     <block type=\"colour_picker\"></block>";
    toolbox += "     <block type=\"colour_random\"></block>";
    toolbox += "     <block type=\"colour_rgb\">";
    toolbox += "        <value name=\"RED\">";
    toolbox += "           <shadow type=\"math_number\">";
    toolbox += "              <field name=\"NUM\">100</field>";
    toolbox += "           </shadow>";
    toolbox += "        </value>";
    toolbox += "        <value name=\"GREEN\">";
    toolbox += "           <shadow type=\"math_number\">";
    toolbox += "              <field name=\"NUM\">50</field>";
    toolbox += "           </shadow>";
    toolbox += "        </value>";
    toolbox += "        <value name=\"BLUE\">";
    toolbox += "           <shadow type=\"math_number\">";
    toolbox += "              <field name=\"NUM\">0</field>";
    toolbox += "           </shadow>";
    toolbox += "        </value>";
    toolbox += "     </block>";
    toolbox += "     <block type=\"colour_blend\">";
    toolbox += "        <value name=\"COLOUR1\">";
    toolbox += "           <shadow type=\"colour_picker\">";
    toolbox += "              <field name=\"COLOUR\">#ff0000</field>";
    toolbox += "           </shadow>";
    toolbox += "        </value>";
    toolbox += "        <value name=\"COLOUR2\">";
    toolbox += "           <shadow type=\"colour_picker\">";
    toolbox += "              <field name=\"COLOUR\">#3333ff</field>";
    toolbox += "           </shadow>";
    toolbox += "        </value>";
    toolbox += "        <value name=\"RATIO\">";
    toolbox += "           <shadow type=\"math_number\">";
    toolbox += "              <field name=\"NUM\">0.5</field>";
    toolbox += "           </shadow>";
    toolbox += "        </value>";
    toolbox += "     </block>";
    toolbox += "  </category>";

    toolbox += "  <sep></sep>";

    toolbox += "  <category name=\"" + catTemplate + "\" colour=\"0\">";

    toolbox += "    <category name=\"" + $.t("blockly.toolbox.samples.actionsAtSunriseSunset.title") + "\" colour=\"0\">";
    toolbox += '       <block type="infinite-loop" id="QgA3R8,a~o)yAe}Q*_pJ" x="88" y="13"><statement name="DO"><block type="yadoms_wait_for_event" id=":ds_^%I`sHcvckT!~O|}"><mutation><additional0 type="yadoms_wait_for_event_mutator_datetime_become" condition="false"/><additional1 type="yadoms_wait_for_event_mutator_datetime_become" condition="false"/></mutation><field name="operatorDd0">EQ</field><field name="operatorDd1">EQ</field><value name="additionalInput_part1_0"><block type="yadoms_date_arithmetic" id=",(|H~LMuHnARwh^/ge2T"><field name="operator">ADD</field><value name="A"><block type="yadoms_date_sunrise" id="V10{/z6Cg(%=I0#A*}%}"/></value><value name="B"><block type="yadoms_date_timespan" id="#v)=GfQI8M}Ns;CkjE@g"><value name="hourInput"><shadow type="math_number" id="mjgbEV;|zAL7Ik]G,*H/"><field name="NUM">0</field></shadow></value><value name="minuteInput"><shadow type="math_number" id="hh,:q[%!dhSc5H},Ye/v"><field name="NUM">30</field></shadow></value></block></value></block></value><statement name="additionalInput_part2_0"><block type="yadoms_log" id="Fs77ix)wP83BVn/8jBfB"><value name="LogContent"><shadow type="text" id="Mc38`Gu*SOt;Q]%MN74K"><field name="TEXT">' + $.t("blockly.toolbox.samples.actionsAtSunriseSunset.logMessage1") + '</field></shadow><block type="text" id="Mc38`Gu*SOt;Q]%MN74K"><field name="TEXT">' + $.t("blockly.toolbox.samples.actionsAtSunriseSunset.logMessage1") + '</field></block></value><next><block type="keyword-value-set" id="x7.{67czG=42[.nDVdWI"><mutation input_shown="true"/><field name="Device">-1</field><field name="Keyword">-1</field><value name="Value"><shadow type="logic_boolean" id="@s8vp%6/SC%178=7=|#P"><field name="BOOL">TRUE</field></shadow><block type="ECurtainCommand" id="lQA}z2M1$H:Kh)4[8D*J"><field name="enumField">Open</field></block></value><next><block type="keyword-value-set" id="Si1P;t`4SOjhx[4qLduT"><mutation input_shown="true"/><field name="Device">-1</field><field name="Keyword">-1</field><value name="Value"><shadow type="ECurtainCommand" id="|fV,^tT|Oem|7i0Q~K/="><field name="enumField">Stop</field></shadow><block type="ECurtainCommand" id=")$+c0^i``A^;dd,q,FLh"><field name="enumField">Open</field></block></value><next><block type="keyword-value-set" id="u5HPsTAqKXX}J$Y)J!l:"><mutation input_shown="true"/><field name="Device">-1</field><field name="Keyword">-1</field><value name="Value"><shadow type="ECurtainCommand" id="tjZ/+#FYQy1@{:Zh}0|D"><field name="enumField">Stop</field></shadow><block type="ECurtainCommand" id="4wUx3oCn_Q~j[R(hM]))"><field name="enumField">Open</field></block></value></block></next></block></next></block></next></block></statement><value name="additionalInput_part1_1"><shadow type="yadoms_date_datetime" id="CYOsBF8QVr_u@w??GP+z"/><block type="yadoms_date_arithmetic" id="hm_`(7J[:WkY:,M*GxC;"><field name="operator">MINUS</field><value name="A"><block type="yadoms_date_sunset" id="@~E%.T)+0/,%,{3rE[V-"/></value><value name="B"><block type="yadoms_date_timespan" id="a;K4(rUf{F|zb53KrX$G"><value name="hourInput"><shadow type="math_number" id="mjgbEV;|zAL7Ik]G,*H/"><field name="NUM">0</field></shadow><block type="math_number" id="JL@=E5(u8M20v6DAH6W`"><field name="NUM">1</field></block></value><value name="minuteInput"><shadow type="math_number" id="hh,:q[%!dhSc5H},Ye/v"><field name="NUM">30</field></shadow><block type="math_number" id="ytB12?G-H`$(a0.fAzrg"><field name="NUM">0</field></block></value></block></value></block></value><statement name="additionalInput_part2_1"><block type="yadoms_log" id="={88Pc5{[dT+w#ubV$pB"><value name="LogContent"><shadow type="text" id="Mc38`Gu*SOt;Q]%MN74K"><field name="TEXT">' + $.t("blockly.toolbox.samples.actionsAtSunriseSunset.logMessage2") + '</field></shadow><block type="text" id="^@aPd)(_hGI%8/0Yu{yH"><field name="TEXT">' + $.t("blockly.toolbox.samples.actionsAtSunriseSunset.logMessage2") + '</field></block></value><next><block type="keyword-value-set" id="D0eY|Yrg5lc|Wg1`.3}_"><mutation input_shown="true"/><field name="Device">-1</field><field name="Keyword">-1</field><value name="Value"><shadow type="ECurtainCommand" id="sx(.W}Md+bnZzxS|F_?D"><field name="enumField">Stop</field></shadow><block type="ECurtainCommand" id="LAJ!u6;;_ZCMwE`;0d,%"><field name="enumField">Close</field></block></value><next><block type="keyword-value-set" id="[)dF/XuIE[K*nv]IFO]Z"><mutation input_shown="true"/><field name="Device">-1</field><field name="Keyword">-1</field><value name="Value"><shadow type="ECurtainCommand" id="i@.J#:hMIXj+.G}j24vU"><field name="enumField">Stop</field></shadow><block type="ECurtainCommand" id="DZC6V0,ep-mI|r^D0Nw5"><field name="enumField">Close</field></block></value><next><block type="keyword-value-set" id=";dXGAUg/OG7C(wlS5gjo"><mutation input_shown="true"/><field name="Device">-1</field><field name="Keyword">-1</field><value name="Value"><shadow type="ECurtainCommand" id="]=OvQmFwNF?h_yKJ]*NJ"><field name="enumField">Stop</field></shadow><block type="ECurtainCommand" id="JRThDDzJ9V`;Dj(!+m~a"><field name="enumField">Close</field></block></value></block></next></block></next></block></next></block></statement></block></statement></block>';
    toolbox += "    </category>";
	
    toolbox += "    <category name=\"" + $.t("blockly.toolbox.samples.lowBatteryLevel.title") + "\" colour=\"0\">";
	toolbox += '       <block type="infinite-loop" id=";l_!K`A~WzghC~Jp+,B/" x="87" y="38"><statement name="DO"><block type="yadoms_wait_for_event" id="XXXwlpQGg%M?pO^:M;%^"><mutation><additional0 type="yadoms_wait_for_event_mutator_capacity_become" condition="true"></additional0></mutation><field name="capacityDd0">batteryLevel</field><field name="operatorDd0">LTE</field><value name="additionalInput_part1_0"><block type="math_number" id="O(W/@K#KuJp|FKlBjJV["><field name="NUM">5</field></block></value><statement name="additionalInput_part2_0"><block type="yadoms_log" id="Fs77ix)wP83BVn/8jBfB"><value name="LogContent"><shadow type="text" id="Mc38`Gu*SOt;Q]%MN74K"><field name="TEXT">' + $.t("blockly.toolbox.samples.lowBatteryLevel.logMessage1") + '</field></shadow></value><next><block type="yadoms_log" id="C9OYdm]`eh-`,|cZVlSq"><value name="LogContent"><shadow type="text" id="2M,BV!W7=W!2rx03AX2F"><field name="TEXT"></field></shadow><block type="text_join" id="8Tue;0.0`?sF9(IH2ku5"><mutation items="5"></mutation><value name="ADD0"><block type="text" id="rX8/|^kjd6t(nfW)wn/h"><field name="TEXT">' + $.t("blockly.toolbox.samples.lowBatteryLevel.logMessage2.part1") + '</field></block></value><value name="ADD1"><block type="yadoms_wait_for_event_result" id="cXMj2a7u#%xh,KI#)oaS"><field name="dropdown">deviceName</field></block></value><value name="ADD2"><block type="text" id="IF/qN;e;M*cuI/7pfp^y"><field name="TEXT">' + $.t("blockly.toolbox.samples.lowBatteryLevel.logMessage2.part2") + '</field></block></value><value name="ADD3"><block type="yadoms_wait_for_event_result" id="bN}83NP.=?jQ?Su-6A?~"><field name="dropdown">value</field></block></value><value name="ADD4"><block type="text" id="MDq|2%[_Fq/R[IFY@Yqq"><field name="TEXT">' + $.t("blockly.toolbox.samples.lowBatteryLevel.logMessage2.part3") + '</field></block></value></block></value></block></next></block></statement></block></statement></block>';
    toolbox += "    </category>";

    toolbox += "  </category>";

	
    toolbox += "  <sep></sep>";
    toolbox += "  <category name=\"" + catVariables + "\" colour=\"330\" custom=\"VARIABLE\"></category>";
    toolbox += "  <category name=\"" + catFunctions + "\" colour=\"290\" custom=\"PROCEDURE\"></category>";
    toolbox += "</xml>";
    return toolbox;
};


