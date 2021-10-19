package com.example.application.views.bug;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.templatemodel.TemplateModel;

@Tag("bug-component")
@JsModule("./views/bug/bug-component.js")
public class BugComponent extends PolymerTemplate<BugComponent.Model> {

    public interface Model extends TemplateModel {
        void setPropy(String propy);
        String getPropy();
    }
}
