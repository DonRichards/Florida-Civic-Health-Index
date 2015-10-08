# [Florida-s-Civic-Health-Index](https://github.com/DonRichards/Florida-Civic-Health-Index)
============================
  Hosted URL: FloridaCivicHealth.com
  National Civic Health Index NOT Public yet

##Florida Civic Health Index Development
  Minimalist site in Node.js, Express.JS, D3.js. No databases or complex json structure for data. 
  Simple to update. Just added entries to the /pubic/data/*.csv 
  Not ideal from a programmer's view but the site needed to be potentially updated by 
  non-developers with individual (csv) files for editing by other staff.

  One slightly impressive item in this, I was able to dynamically load a jade file into
  another not a 'entends' feature. But a conditional reference to a .jade file. 

#PLANNED UPDATES:
- [x] Add City by City Breakdown on Florida's Page
- [-] Create a heat map or City outline over Florida for City Breakdown
- [x] unknown National Average data replaced
- [-] Editor Notes (popups)
- [-] WYSIWYG Page Editor 
- [-] Mongodb Pages instead of JADE (Completed on National Civic Health Index)
- [ ] Asynchronously Load Graphs

License
==

The MIT License (MIT)

Copyright (c) 2014 Don Richards <Don@louFreyInstitute.org>

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.