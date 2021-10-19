package com.example.application.views.bug;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;

@Tag("bug-view")
@JsModule("./views/bug/bug-view.js")
@Route(value = "bug", layout = MainLayout.class)
@PageTitle("Bug")
public class BugView extends PolymerTemplate<TemplateModel> {

    //@Id
    //private BugComponent bugComponent;
}
